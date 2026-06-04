# C++ and JavaScript Problem Solving Setup

This playground is for solving programming problems in C++ and JavaScript from one VS Code/Antigravity workspace. It uses one shared `input.txt`, one shared `output.txt`, and one build task that decides whether to run C++ or JavaScript from the active file.

![VS Code Competitive Programming Setup](images/setUp.png)

## 1. What This Setup Does

- Runs `.cpp` files with `g++`.
- Runs `.js` files with Node.js.
- Reads test input from `input.txt`.
- Writes program output to `output.txt`.
- Shows language, file name, and runtime in the terminal.
- Optionally asks Gemini to estimate time and space complexity after a successful run.
- Clears `input.txt` and `output.txt` when the active problem file is empty.
- Keeps generated binaries, secrets, and optional folders hidden from the workspace Explorer where possible.

## 2. First-Time Setup

Install these tools before using the playground on macOS:

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

You can verify the required tools manually:

```bash
g++ --version
node --version
bash --version
```

Or run the setup checker from the playground folder:

```bash
cd /path/to/playGround
chmod +x scripts/setup-check.sh
./scripts/setup-check.sh
```

Replace `/path/to/playGround` with the folder location on that Mac.

The setup checker verifies the required tools, starts the Command Line Tools installer if needed, installs Homebrew when it is missing, installs Node.js through Homebrew when needed, and makes the runner executable.

On Windows, install these tools before using the playground locally:

1. **Git for Windows:** Install from [git-scm.com](https://git-scm.com/) and make sure Git Bash is available.
2. **C++ compiler:** Install MSYS2/MinGW-w64 or another `g++` provider, then make sure `g++` works from the VS Code terminal.
3. **Node.js:** Install from [nodejs.org](https://nodejs.org/).
4. **VS Code**
5. **C/C++ Extension:** Install the Microsoft C/C++ extension.

Check from the VS Code terminal:

```bash
bash --version
g++ --version
node --version
```

The runner script works on macOS, Linux, GitHub Codespaces, and Windows when `bash`, `g++`, and `node` are available in the terminal PATH.

## 3. Open The Workspace

Open `cppWorkspace.code-workspace` instead of opening the folder directly. This applies the project-specific workspace settings.

The workspace file helps the editor remember your preferred layout when you close and reopen the project.

Recommended layout:

- Open `testcpp.cpp` or `testJS.js` on the left.
- Open `input.txt` on the top right.
- Open `output.txt` on the bottom right.

## 4. Run Code

The default build task in `.vscode/tasks.json` calls `.vscode/run-active-problem.sh`.

- If the active file is `.cpp`, the runner compiles and runs that C++ file.
- If the active file is `.js`, the runner runs that JavaScript file with Node.js.
- If the active file is `input.txt` or `output.txt`, the runner reuses the last `.cpp` or `.js` problem file you ran.
- If there is no remembered problem file yet, the runner falls back to the most recently modified non-empty `.cpp` or `.js` file.

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

## 5. Shortcut Guide

Use these shortcuts to run the same default build task:

| Where you are using it | Run shortcut | Notes |
| --- | --- | --- |
| Mac app | `Cmd + R` | Your custom local shortcut after setup. |
| Mac app backup | `Cmd + Shift + B` | VS Code's default build task shortcut. |
| Windows app | `Ctrl + Shift + B` | VS Code's default build task shortcut. |
| Mac browser | `Cmd + Shift + B` | Use this in GitHub Codespaces. |
| Windows browser | `Ctrl + Shift + B` | Use this in GitHub Codespaces. |

The functionality is the same in each place:

1. Put sample input in `input.txt`.
2. Open the `.cpp` or `.js` problem file once and run it.
3. After that, you can run again from the problem file, `input.txt`, or `output.txt`.
4. Check the result in `output.txt`.

## 6. Use In GitHub Codespaces

This repository includes a dev container so GitHub Codespaces opens with C++, Node.js, and the recommended C/C++ extension ready to use.

In Codespaces, use the same runner workflow:

1. Put sample input in `input.txt`.
2. Open the `.cpp` or `.js` problem file you want to run.
3. Press `Ctrl + Shift + B` on Windows/Linux or `Cmd + Shift + B` on Mac.
4. Check the result in `output.txt`.

The Codespaces shortcut runs the same default build task as the local setup. Browser shortcuts such as `Ctrl + R` or `Cmd + R` usually reload the page, so keep those for the local desktop app only.

## 7. Set Up The Cmd + R Shortcut On macOS

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

## 8. Optional Gemini Complexity Estimate

The runner can ask Gemini to estimate time and space complexity after a successful run.

Create a local config file:

```bash
cp config/.env.example config/.env
```

Then edit `config/.env`:

```text
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
COMPLEXITY_ENABLED=true
COMPLEXITY_CACHE_ENABLED=true
```

`config/.env` is ignored by git. Keep your real API key there only. Do not put a real key in `config/.env.example`.

Use `COMPLEXITY_ENABLED=false` when you want to run code without asking Gemini for a complexity estimate.

Use `COMPLEXITY_CACHE_ENABLED=true` to avoid repeated Gemini calls for unchanged code. The checker stores cached estimates in `config/.complexity-cache.json`, which is ignored by git.

When enabled, the terminal prints:

```text
Estimated complexity
Time     : O(n)
Space    : O(n)
Reason   : The solution scans the array once and stores seen values in a map.
```

If the same code is run again and caching is enabled, the heading shows:

```text
Estimated complexity (cached)
```

This is an AI estimate, not a mathematical guarantee. Use it as a helpful review.

## 9. Empty File Auto-Clear

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

## 10. File And Folder Guide

- `.vscode/tasks.json` - VS Code build task configuration.
- `.vscode/run-active-problem.sh` - Main runner for C++ and JavaScript.
- `.vscode/complexity-check.js` - Gemini-powered complexity estimator.
- `.vscode/auto-clear-watcher.js` - Clears shared input/output when root practice files become empty.
- `.vscode/settings.json` - Small editor settings for this workspace.
- `config/.env` - Your local Gemini API key file. Ignored by git.
- `config/.env.example` - Safe template showing which environment variables are needed.
- `config/.complexity-cache.json` - Local Gemini estimate cache. Ignored by git.
- `cppWorkspace.code-workspace` - Workspace settings for layout restore and Explorer cleanup.
- `scripts/setup-check.sh` - Mac setup checker.
- `problems/` - Optional folder for saved solutions.
- `testcpp.cpp` - Active scratch C++ problem file.
- `testJS.js` - Active scratch JavaScript problem file.
- `input.txt` - Shared test input file.
- `output.txt` - Shared program output file.
- `images/` - README screenshot assets. Hidden from Explorer by workspace settings.

## 11. Explorer Cleanup

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
- README files
- generated C++ binaries such as `output_bin`
- `images`
- `.env` files outside the visible config flow

To unhide a file or folder later, change its value to `false` or remove that line from `files.exclude`.

For example, to show README files in the Explorer again, change:

```jsonc
"**/README.md": true
```

to:

```jsonc
"**/README.md": false
```

## 12. Git Safety

- `config/.env` is ignored so the Gemini API key is not uploaded.
- `config/.complexity-cache.json` is ignored so local Gemini cache data is not uploaded.
- Generated binaries are ignored so C++ runs do not pollute git status.
- `config/.env.example` is safe to commit because it contains placeholders only.

Before committing, it is good to check:

```bash
git status --short
```
