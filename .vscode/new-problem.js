const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawn } = require("child_process");

const rootDir = path.join(__dirname, "..");
const problemsDir = path.join(rootDir, "problems");
const configDir = path.join(rootDir, "config");
const defaultsFile = path.join(configDir, "new-problem.defaults.json");
const stateFile = path.join(configDir, ".new-problem-state.json");
const lastProblemFile = path.join(configDir, ".last-problem-file");
const inputFile = path.join(rootDir, "input.txt");
const outputFile = path.join(rootDir, "output.txt");

const defaults = readJson(defaultsFile, {
  folders: ["nsups", "codewars"],
  languages: ["cpp", "js"],
  defaultFolder: "nsups",
  defaultLanguage: "cpp",
});
const state = readJson(stateFile, {});

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function existingProblemFolders() {
  if (!fs.existsSync(problemsDir)) return [];

  return fs
    .readdirSync(problemsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function orderedChoices(items, preferred) {
  return unique([preferred, ...items]);
}

let promptInterface;
let pipedAnswers;

function choose(question, choices) {
  if (!process.stdin.isTTY) {
    return Promise.resolve(choices[0]);
  }

  process.stdout.write(`${question}\n`);
  choices.forEach((choice, index) => {
    process.stdout.write(`  ${index + 1}. ${choice}\n`);
  });

  return ask("Select number (Enter for 1): ").then((answer) => {
    if (!answer) {
      process.stdout.write(`Selected: ${choices[0]}\n\n`);
      return choices[0];
    }

    const index = Number(answer) - 1;
    if (!Number.isInteger(index) || index < 0 || index >= choices.length) {
      console.error(`Invalid choice: ${answer}`);
      process.exit(1);
    }

    process.stdout.write(`Selected: ${choices[index]}\n\n`);
    return choices[index];
  });
}

function nextPipedAnswer() {
  if (!pipedAnswers) {
    pipedAnswers = fs.readFileSync(0, "utf8").split(/\r?\n/);
  }

  return (pipedAnswers.shift() || "").trim();
}

function ask(question) {
  if (!process.stdin.isTTY) {
    process.stdout.write(question);
    return Promise.resolve(nextPipedAnswer());
  }

  if (!promptInterface) {
    promptInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  return new Promise((resolve) => {
    promptInterface.question(question, (answer) => resolve(answer.trim()));
  });
}

function closePromptInterface() {
  if (promptInterface) {
    promptInterface.close();
    promptInterface = undefined;
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function today() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date());

  const value = (type) => parts.find((part) => part.type === type)?.value;
  return `${value("day")} ${value("month")} ${value("year")}`;
}

function cppTemplate({ title, link, date }) {
  return `/*\n * Problem  : ${title}\n * Link     : ${link}\n * Date     : ${date}\n * Resources:\n *   -\n */\n\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main(){\n    \n    return 0;\n}\n`;
}

function jsTemplate({ title, link, date }) {
  return `/*\n * Problem  : ${title}\n * Link     : ${link}\n * Date     : ${date}\n * Resources:\n *   -\n */\n\nconst fs = require("fs");\nconst input = fs.readFileSync(0, "utf8").trim().split(/\\s+/);\n\nfunction main() {\n    \n}\n\nmain();\n`;
}

function openInEditor(file) {
  try {
    const child = spawn("code", ["-r", file], {
      detached: true,
      stdio: "ignore",
    });
    child.on("error", () => {});
    child.unref();
  } catch {
    // The path is printed below, so this is still usable without the code CLI.
  }
}

async function main() {
  const folders = orderedChoices(
    [...defaults.folders, ...existingProblemFolders(), "custom"],
    state.lastFolder || defaults.defaultFolder
  );
  const languages = orderedChoices(
    defaults.languages,
    state.lastLanguage || defaults.defaultLanguage
  );

  let folder = await choose("Choose folder:", folders);
  if (folder === "custom") {
    folder = await ask("Folder name: ");
  }

  if (!folder) {
    console.error("Folder name is required.");
    process.exit(1);
  }

  const language = await choose("Choose language:", languages);
  const link = await ask("Problem link: ");
  const title = await ask("Problem title: ");
  closePromptInterface();

  if (!title) {
    console.error("Problem title is required.");
    process.exit(1);
  }

  const slug = slugify(title);
  if (!slug) {
    console.error("Problem title must contain at least one letter or number.");
    process.exit(1);
  }

  const extension = language === "js" ? "js" : "cpp";
  const targetDir = path.join(problemsDir, folder);
  const targetFile = path.join(targetDir, `${slug}.${extension}`);

  if (fs.existsSync(targetFile)) {
    console.error(`File already exists: ${path.relative(rootDir, targetFile)}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const meta = { title, link, date: today() };
  const content = extension === "js" ? jsTemplate(meta) : cppTemplate(meta);

  fs.writeFileSync(targetFile, content);
  fs.writeFileSync(inputFile, "");
  fs.writeFileSync(outputFile, "");
  fs.writeFileSync(lastProblemFile, `${targetFile}\n`);
  writeJson(stateFile, { lastFolder: folder, lastLanguage: language });

  openInEditor(targetFile);

  console.log("New problem created");
  console.log(`File     : ${path.relative(rootDir, targetFile)}`);
  console.log(`Folder   : ${folder}`);
  console.log(`Language : ${language}`);
  console.log("Cleared  : input.txt, output.txt");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
