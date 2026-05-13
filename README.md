# C++ and JavaScript Problem Solving Setup

This playground is for solving programming problems in C++ and JavaScript from one VS Code/Antigravity workspace. It uses one shared `input.txt`, one shared `output.txt`, and one build task that decides whether to run C++ or JavaScript from the active file.

![VS Code Competitive Programming Setup](images/setUp.png)

## What This Setup Does

- Runs `.cpp` files with `g++`.
- Runs `.js` files with Node.js.
- Reads test input from `input.txt`.
- Writes program output to `output.txt`.
- Shows language, file name, and runtime in the terminal.
- Optionally asks Gemini to estimate time and space complexity after a successful run.
- Clears `input.txt` and `output.txt` when the active problem file is empty.
- Keeps generated binaries, secrets, and optional folders hidden from the workspace Explorer where possible.

## New Mac Setup

Install these tools before using the playground on a new Mac:

1. **Command Line Tools (Clang/G++):**
   ```bash
   xcode-select --install
   ```
2. **Node.js:** Install from [nodejs.org](https://nodejs.org/), then check:
   ```bash
   node --version
   ```
3. **VS Code or Antigravity**
4. **C/C++ Extension:** Install the Microsoft C/C++ extension.

You can verify the required tools with:

```bash
g++ --version
node --version
bash --version
```

Or run the setup checker:

```bash
cd /path/to/playGround
chmod +x scripts/setup-check.sh
./scripts/setup-check.sh
```

Replace `/path/to/playGround` with the folder location on that Mac.

The setup checker verifies the required tools, starts the Command Line Tools installer if needed, installs Homebrew when it is missing, installs Node.js through Homebrew when needed, and makes the runner executable.

## Daily Workflow

### 1. Open The Workspace

Open `cppWorkspace.code-workspace` instead of opening the folder directly. This applies the project-specific workspace settings.

### 2. Use This Layout

- Open `testcpp.cpp` or `testJS.js` on the left.
- Open `input.txt` on the top right.
- Open `output.txt` on the bottom right.

The workspace file helps the editor remember this layout when you close and reopen the project.

### 3. Run Code

The default build task in `.vscode/tasks.json` calls `.vscode/run-active-problem.sh`.

- If the active file is `.cpp`, the runner compiles and runs that C++ file.
- If the active file is `.js`, the runner runs that JavaScript file with Node.js.
- If the active file is `input.txt`, the runner uses the most recently modified `.cpp` or `.js` file.

The task always reads from:

```text
input.txt
```

The task always writes to:

```text
output.txt
```

After a successful run, the terminal looks like:

```text
Problem runner finished
Language : JavaScript
File     : testJS.js
Runtime  : 0.053s
```

If C++ compilation fails, JavaScript crashes, or `input.txt` is missing, the runner prints a clearer failure message in the terminal.

### 4. Empty File Auto-Clear

If the active `.cpp` or `.js` file is empty, the runner clears both shared test files:

```text
input.txt
output.txt
```

The workspace also has an `Auto Clear Watcher` task in `.vscode/tasks.json`. It starts when the folder opens and watches the root practice files:

```text
testJS.js
testcpp.cpp
```

When either file becomes empty, the watcher clears `input.txt` and `output.txt`. This keeps stale input/output from staying around after you reset a practice file.

## Cmd + R Shortcut

By default, VS Code uses `Cmd + Shift + B` to run the build task.

To run this playground with `Cmd + R`:

1. Open Keyboard Shortcuts with `Cmd + K`, then `Cmd + S`.
2. Search for `Tasks: Run Build Task`.
3. Click the pencil icon beside `Tasks: Run Build Task`.
4. Press `Cmd + R`, then press Enter.
5. If VS Code shows a conflict with `Developer: Reload Window`, search for that command.
6. Right-click the `Cmd + R` keybinding for `Developer: Reload Window`.
7. Choose `Remove Keybinding`.

After this, `Cmd + R` runs the active `.cpp` or `.js` problem file and updates `output.txt`.

## Gemini Complexity Estimate

The runner can ask Gemini to estimate time and space complexity after a successful run.

Create a local config file:

```bash
cp config/.env.example config/.env
```

Then edit `config/.env`:

```text
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
```

`config/.env` is ignored by git. Keep your real API key there only. Do not put a real key in `config/.env.example`.

When enabled, the terminal prints:

```text
Estimated complexity
Time     : O(n)
Space    : O(n)
Reason   : The solution scans the array once and stores seen values in a map.
```

This is an AI estimate, not a mathematical guarantee. Use it as a helpful review.

## File And Folder Guide

- `.vscode/tasks.json` - VS Code build task configuration.
- `.vscode/run-active-problem.sh` - Main runner for C++ and JavaScript.
- `.vscode/complexity-check.js` - Gemini-powered complexity estimator.
- `.vscode/auto-clear-watcher.js` - Clears shared input/output when root practice files become empty.
- `.vscode/settings.json` - Small editor settings for this workspace.
- `config/.env` - Your local Gemini API key file. Ignored by git.
- `config/.env.example` - Safe template showing which environment variables are needed.
- `cppWorkspace.code-workspace` - Workspace settings for layout restore and Explorer cleanup.
- `scripts/setup-check.sh` - Mac setup checker.
- `problems/` - Optional folder for saved solutions.
- `testcpp.cpp` - Active scratch C++ problem file.
- `testJS.js` - Active scratch JavaScript problem file.
- `input.txt` - Shared test input file.
- `output.txt` - Shared program output file.
- `images/` - README screenshot assets. Hidden from Explorer by workspace settings.

## Explorer Cleanup

`cppWorkspace.code-workspace` uses `files.exclude` to keep the Explorer clean.

Inside `files.exclude`:

```jsonc
"some-file-or-folder": true
```

means hide it from the Explorer.

```jsonc
"some-file-or-folder": false
```

means explicitly show it.

These settings only change what you see in the editor. They do not delete files and do not affect git.

Currently hidden examples include:

- `.git`
- `.vscode`
- `.gitignore`
- `config`
- `scripts`
- generated C++ binaries such as `output_bin`
- `images`
- `.env` files outside the visible config flow

To unhide a file or folder later, change its value to `false` or remove that line from `files.exclude`.

## Git Safety

- `config/.env` is ignored so the Gemini API key is not uploaded.
- Generated binaries are ignored so C++ runs do not pollute git status.
- `config/.env.example` is safe to commit because it contains placeholders only.

Before committing, it is good to check:

```bash
git status --short
```
