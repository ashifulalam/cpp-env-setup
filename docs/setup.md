# Setup Guide

## Fresh Mac Checklist

### 1. Install Required Tools

Install Command Line Tools:

```bash
xcode-select --install
```

Install:

- Node.js from [nodejs.org](https://nodejs.org/)
- VS Code or Antigravity

### 2. Clone The Repository

```bash
mkdir -p ~/Documents/workSpace
cd ~/Documents/workSpace
git clone git@github.com:ashifulalam/ps-env-setup.git playGround
cd playGround
```

### 3. Verify Tools

```bash
g++ --version
node --version
bash --version
```

### 4. Run Setup Checker

```bash
chmod +x scripts/setup-check.sh
./scripts/setup-check.sh
```

### 5. Open The Workspace

Open the workspace file, not only the folder:

```bash
code cppWorkspace.code-workspace
```

If `code` does not work:

1. Open VS Code.
2. Press `Cmd + Shift + P`.
3. Run `Shell Command: Install 'code' command in PATH`.
4. Close and reopen the terminal.
5. Run:
   ```bash
   code cppWorkspace.code-workspace
   ```

### 6. Install C/C++ Extension

If VS Code asks to install the Microsoft C/C++ extension, install it.

If it does not ask:

1. Open Extensions.
2. Search `C/C++`.
3. Install the Microsoft extension.

### 7. Add Terminal Shortcuts

Open `~/.zshrc`:

```bash
open -e ~/.zshrc
```

Add:

```bash
alias ps='cd ~/Documents/workSpace/playGround'
alias np='cd ~/Documents/workSpace/playGround && node .vscode/new-problem.js'
```

Reload shell:

```bash
source ~/.zshrc
```

Check:

```bash
ps
np
```

Use `Ctrl + C` to cancel `np` if you are only testing.

### 8. Set Cmd + R Shortcut

1. Press `Cmd + K`, then `Cmd + S`.
2. Search `Tasks: Run Build Task`.
3. Click the pencil icon.
4. Press `Cmd + R`.
5. Press Enter.

If VS Code shows a conflict:

1. Search `Developer: Reload Window`.
2. Right-click its `Cmd + R` keybinding.
3. Choose `Remove Keybinding`.
4. Set `Cmd + R` for `Tasks: Run Build Task` again.

### 9. Test Run

1. Open a `.cpp` or `.js` file.
2. Put sample input in `input.txt`.
3. Press `Cmd + R`.
4. Check `output.txt`.

### 10. Create A New Problem

From VS Code:

```text
Cmd + Shift + P
Tasks: Run Task
New Problem
```

From terminal:

```bash
np
```

## Workspace

Open `cppWorkspace.code-workspace`.

Recommended layout:

- Open `testcpp.cpp` or `testJS.js` on the left.
- Open `input.txt` on the top right.
- Open `output.txt` on the bottom right.
