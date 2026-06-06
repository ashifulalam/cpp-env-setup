# Setup

Use this for local macOS setup. For browser setup, use [codespaces.md](codespaces.md).

## 1. Install Tools

1. Install Apple Command Line Tools:

   ```bash
   xcode-select --install
   ```

2. Install Node.js from [nodejs.org](https://nodejs.org/).
3. Install VS Code or Antigravity.

## 2. Clone The Repo

```bash
mkdir -p ~/Documents/workSpace
cd ~/Documents/workSpace
git clone git@github.com:ashifulalam/ps-env-setup.git playGround
cd playGround
```

## 3. Check Setup

```bash
chmod +x scripts/setup-check.sh
./scripts/setup-check.sh
```

The checker verifies `g++`, `node`, and `bash`.

## 4. Open The Workspace

Open the workspace file:

```bash
code cppWorkspace.code-workspace
```

If `code` is missing:

1. Open VS Code.
2. Press `Cmd + Shift + P`.
3. Run `Shell Command: Install 'code' command in PATH`.
4. Restart the terminal.
5. Run `code cppWorkspace.code-workspace` again.

## 5. Install C++ Extension

1. Open Extensions.
2. Search `C/C++`.
3. Install the Microsoft C/C++ extension.

## 6. Add Optional Terminal Shortcuts

Open `~/.zshrc`:

```bash
open -e ~/.zshrc
```

Add:

```bash
alias ps='cd ~/Documents/workSpace/playGround'
alias np='cd ~/Documents/workSpace/playGround && node .vscode/new-problem.js'
```

Reload:

```bash
source ~/.zshrc
```

## 7. Add Optional `Cmd + R` Run Shortcut

1. Press `Cmd + K`, then `Cmd + S`.
2. Search `Tasks: Run Build Task`.
3. Click the pencil icon.
4. Press `Cmd + R`.
5. Press Enter.

If there is a conflict, remove `Cmd + R` from `Developer: Reload Window`, then set it again for `Tasks: Run Build Task`.

## 8. Test The Runner

1. Open `workspace/testcpp.cpp` or `workspace/testJS.js`.
2. Put sample input in `workspace/input.txt`.
3. Press `Cmd + R` or `Cmd + Shift + B`.
4. Check `workspace/output.txt`.

The run task saves dirty files before executing, so unsaved edits in a `.cpp` or `.js` file are included.
