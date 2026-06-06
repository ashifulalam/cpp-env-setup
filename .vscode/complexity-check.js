const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const cachePath = path.join(rootDir, "config", ".complexity-cache.json");
const envPaths = [
  path.join(rootDir, "config", ".env"),
  path.join(rootDir, ".env"),
];
const filePath = process.argv[2];

loadLocalEnv(envPaths);

const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const complexityEnabled = parseBooleanEnv("COMPLEXITY_ENABLED", true);
const cacheEnabled = parseBooleanEnv("COMPLEXITY_CACHE_ENABLED", true);

main();

async function main() {
  if (!complexityEnabled) {
    return;
  }

  if (!apiKey) {
    return;
  }

  if (!filePath || !fs.existsSync(filePath)) {
    return;
  }

  const code = fs.readFileSync(filePath, "utf8");
  const language = path.extname(filePath) === ".cpp" ? "C++" : "JavaScript";
  const prompt = buildPrompt(language, path.basename(filePath), code);
  const cacheKey = createCacheKey({ code, language, model });
  const cache = cacheEnabled ? readCache(cachePath) : {};
  const cachedEstimate = cache[cacheKey];

  try {
    if (cachedEstimate) {
      printEstimate(cachedEstimate, true);
      return;
    }

    const estimate = await requestComplexityEstimate({ apiKey, model, prompt });

    if (cacheEnabled) {
      cache[cacheKey] = estimate;
      writeCache(cachePath, cache);
    }

    printEstimate(estimate, false);
  } catch (error) {
    console.log("");
    console.log("Estimated complexity failed");
    console.log(`Reason   : ${error.message}`);
  }
}

function parseBooleanEnv(name, defaultValue) {
  const value = process.env[name];

  if (value === undefined || value === "") return defaultValue;

  return !["0", "false", "no", "off"].includes(value.toLowerCase());
}

function createCacheKey({ code, language, model }) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify({ code, language, model }))
    .digest("hex");
}

function readCache(file) {
  if (!fs.existsSync(file)) return {};

  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return {};
  }
}

function writeCache(file, cache) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(cache, null, 2)}\n`);
}

function printEstimate(estimate, fromCache) {
  console.log("");
  console.log(`Estimated complexity${fromCache ? " (cached)" : ""}`);
  console.log(`Time     : ${estimate.time || "Unknown"}`);
  console.log(`Space    : ${estimate.space || "Unknown"}`);

  if (estimate.reason) {
    console.log(`Reason   : ${estimate.reason}`);
  }
}

function loadLocalEnv(files) {
  const file = files.find((candidate) => fs.existsSync(candidate));

  if (!file) return;

  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");

    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function buildPrompt(language, fileName, code) {
  return [
    "Estimate the Big-O time and auxiliary space complexity of this LeetCode-style solution.",
    "Return only valid JSON with keys: time, space, reason.",
    "Use concise Big-O notation, such as O(n), O(n log n), or O(1).",
    "The reason must be one short sentence.",
    "Do not include markdown.",
    "",
    `Language: ${language}`,
    `File: ${fileName}`,
    "",
    "Code:",
    code,
  ].join("\n");
}

async function requestComplexityEstimate({ apiKey, model, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0,
        responseMimeType: "application/json",
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || `Gemini API returned ${response.status}`;
    throw new Error(message);
  }

  const text = data?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim();

  if (!text) {
    throw new Error("Gemini returned an empty response");
  }

  return JSON.parse(text);
}
