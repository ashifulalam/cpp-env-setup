const fs = require("fs");
const path = require("path");

const workspaceDir = path.join(__dirname, "..");
const problemsDir = path.join(workspaceDir, "problems");
const inputTxt = path.join(workspaceDir, "input.txt");
const outputTxt = path.join(workspaceDir, "output.txt");
const configDir = path.join(workspaceDir, "config");
const lastProblemFile = path.join(configDir, ".last-problem-file");
const rootScratchFiles = ["testJS.js", "testcpp.cpp"];
const watchedExtensions = new Set([".cpp", ".js"]);
const ignoredDirectories = new Set([".git", "node_modules", "templates"]);
const fileWatchers = new Map();

function clearSharedIo() {
  fs.writeFileSync(inputTxt, "");
  fs.writeFileSync(outputTxt, "");
}

function rememberProblemFile(filePath) {
  fs.mkdirSync(configDir, { recursive: true });
  fs.writeFileSync(lastProblemFile, `${filePath}\n`);
}

function isWatchableFile(filePath) {
  const extension = path.extname(filePath);
  if (!watchedExtensions.has(extension)) {
    return false;
  }

  const relativePath = path.relative(workspaceDir, filePath);
  return !relativePath.split(path.sep).some((segment) => ignoredDirectories.has(segment));
}

function collectWatchTargets(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const targets = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        targets.push(...collectWatchTargets(entryPath));
      }
      continue;
    }

    if (entry.isFile() && isWatchableFile(entryPath)) {
      targets.push(entryPath);
    }
  }

  return targets;
}

function ensureRootScratchFiles() {
  for (const file of rootScratchFiles) {
    const filePath = path.join(workspaceDir, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "");
    }
  }
}

function watchFile(filePath) {
  if (fileWatchers.has(filePath)) {
    return;
  }

  const watcher = fs.watch(filePath, (eventType) => {
    if (eventType !== "change") {
      return;
    }

    try {
      const content = fs.readFileSync(filePath, "utf8");
      if (content.trim() === "") {
        clearSharedIo();
        return;
      }

      rememberProblemFile(filePath);
    } catch {
      // Ignore transient read errors while the file is being edited.
    }
  });

  fileWatchers.set(filePath, watcher);
}

function syncWatchers() {
  ensureRootScratchFiles();

  const desiredFiles = new Set([
    ...rootScratchFiles.map((file) => path.join(workspaceDir, file)),
    ...collectWatchTargets(problemsDir),
  ]);

  for (const filePath of desiredFiles) {
    watchFile(filePath);
  }

  for (const [filePath, watcher] of fileWatchers.entries()) {
    if (!desiredFiles.has(filePath) || !fs.existsSync(filePath)) {
      watcher.close();
      fileWatchers.delete(filePath);
    }
  }
}

syncWatchers();
setInterval(syncWatchers, 1500);

console.log("Watching scratch files and problems/*.cpp|*.js for auto-clear...");
