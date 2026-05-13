# C++ and JavaScript Problem Solving Setup

This repository contains a small VS Code playground for solving programming problems in both C++ and JavaScript. It uses one shared input file, one shared output file, and one build task that automatically chooses the correct runner based on the file you are working on.

![VS Code Competitive Programming Setup](images/setUp.png)

## New Mac Setup

Install these tools on a new Mac before using the playground:

1. **Command Line Tools (Clang/G++):**
   ```bash
   xcode-select --install
   ```
2. **Node.js:** Install from [nodejs.org](https://nodejs.org/), then check:
   ```bash
   node --version
   ```
3. **Visual Studio Code:** Download from [code.visualstudio.com](https://code.visualstudio.com/).
4. **C/C++ Extension:** Install the Microsoft C/C++ extension in VS Code.

Before using the runner, these commands should work in the VS Code terminal:

```bash
g++ --version
node --version
bash --version
```

## How to Use

### 1. Recommended Layout

- Open `testcpp.cpp` or `testJS.js` on the **left**.
- Open `input.txt` on the **top right**.
- Open `output.txt` on the **bottom right**.

### 2. Running Code

The default build task in `.vscode/tasks.json` calls `.vscode/run-active-problem.sh`.

- If the active file is `.cpp`, it compiles and runs the C++ file.
- If the active file is `.js`, it runs the JavaScript file with Node.js.
- If the active file is `input.txt`, it runs the most recently modified `.cpp` or `.js` file in this folder.

The task always reads from:

```text
input.txt
```

The task always writes to:

```text
output.txt
```

## Shortcut

By default, VS Code uses `Cmd + Shift + B` for the build task.

To use `Cmd + R` instead:

1. In VS Code, press `Cmd + K`, then `Cmd + S`.
2. Search for `Tasks: Run Build Task`.
3. Click the plus or pencil icon to change the keybinding.
4. Press `Cmd + R` and hit Enter.
5. If `Cmd + R` conflicts with Reload Window, remove the old Reload Window keybinding.

## File Structure

- `.vscode/tasks.json` - VS Code build task.
- `.vscode/run-active-problem.sh` - Detects and runs C++ or JavaScript files.
- `testcpp.cpp` - Sample C++ problem file.
- `testJS.js` - Sample JavaScript problem file.
- `input.txt` - Place test cases here.
- `output.txt` - Results appear here automatically.
- `images/setUp.png` - Workspace screenshot.
