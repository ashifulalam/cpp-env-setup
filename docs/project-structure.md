# Project Structure

Use this as a map when changing the workspace.

## Main Files

```text
README.md                         main entry point
cppWorkspace.code-workspace       VS Code workspace settings
input.txt                         shared sample input
output.txt                        shared program output
testcpp.cpp                       scratch C++ file
testJS.js                         scratch JavaScript file
```

## Tooling

```text
.vscode/tasks.json                VS Code task definitions
.vscode/run-active-problem.sh     C++/JavaScript runner
.vscode/new-problem.js            problem file generator
.vscode/auto-clear-watcher.js     current-file tracker and input/output clearer
.vscode/complexity-check.js       Gemini complexity estimator
.vscode/toggle-explorer-cleanup.js Explorer cleanup toggle
.vscode/extensions.json           recommended VS Code extensions
.vscode/settings.json             editor settings
scripts/setup-check.sh            macOS setup checker
```

## Config

```text
config/.env                       local Gemini API key, ignored
config/.env.example               safe Gemini config template
config/new-problem.defaults.json  committed new-problem defaults
config/.complexity-cache.json     Gemini cache, ignored
config/.last-problem-file         current runner target, ignored
config/.new-problem-state.json    last folder/language, ignored
```

## Problems

```text
problems/                         saved solutions
problems/templates/cpp-template.cpp
problems/templates/js-template.js
```

Organize saved solutions by platform, topic, or contest:

```text
problems/codewars/
problems/nsups/
problems/hackerrank/
problems/leetcode/
```

## Codespaces

```text
.devcontainer/devcontainer.json   GitHub Codespaces environment
```

## Assets

```text
images/                           README images
docs/                             workspace guides
```
