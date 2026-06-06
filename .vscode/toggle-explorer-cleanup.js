const fs = require("fs");
const path = require("path");

const workspaceFile =
  process.env.WORKSPACE_FILE ||
  path.join(__dirname, "..", "cppWorkspace.code-workspace");

const excludeKeys = [
  "**/.DS_Store",
  ".env",
  "**/.git",
  "**/.gitignore",
  "**/output_bin",
  "**/output_bin.exe",
  "**/output_bin.dSYM",
  "**/.devcontainer",
  "**/.vscode",
  "config",
  "docs",
  "docs/images",
  "scripts",
  "problems/README.md",
  "**/README.md",
];

let text = fs.readFileSync(workspaceFile, "utf8");

const currentlyHidden = excludeKeys.some((key) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`"${escapedKey}"\\s*:\\s*true`).test(text);
});

const nextValue = currentlyHidden ? "false" : "true";

for (const key of excludeKeys) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  text = text.replace(
    new RegExp(`("${escapedKey}"\\s*:\\s*)(true|false)`, "g"),
    `$1${nextValue}`
  );
}

fs.writeFileSync(workspaceFile, text);

console.log(
  nextValue === "true"
    ? "Explorer cleanup enabled. Hidden files are now hidden."
    : "Explorer cleanup disabled. Hidden files are now visible."
);
