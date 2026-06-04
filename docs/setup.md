# Setup Guide

## Fresh Mac Checklist

1. Install Command Line Tools:
   ```bash
   xcode-select --install
   ```

2. Install Node.js from [nodejs.org](https://nodejs.org/).

3. Install VS Code or Antigravity.

4. Clone the repository:
   ```bash
   mkdir -p ~/Documents/workSpace
   cd ~/Documents/workSpace
   git clone git@github.com:ashifulalam/ps-env-setup.git playGround
   cd playGround
   ```

5. Verify tools:
   ```bash
   g++ --version
   node --version
   bash --version
   ```

6. Run setup checker:
   ```bash
   chmod +x scripts/setup-check.sh
   ./scripts/setup-check.sh
   ```

7. Open the workspace:
   ```bash
   code cppWorkspace.code-workspace
   ```

8. Install the Microsoft C/C++ extension if VS Code asks.

9. Add optional terminal shortcuts to `~/.zshrc`:
   ```bash
   alias ps='cd ~/Documents/workSpace/playGround'
   alias np='cd ~/Documents/workSpace/playGround && node .vscode/new-problem.js'
   ```

10. Reload shell:
    ```bash
    source ~/.zshrc
    ```

11. Set `Cmd + R` shortcut:
    ```text
    Cmd + Shift + P
    Preferences: Open Keyboard Shortcuts
    Search: Tasks: Run Build Task
    Set shortcut: Cmd + R
    ```

12. Test run:
    ```text
    Open a .cpp or .js file
    Put input in input.txt
    Press Cmd + R
    Check output.txt
    ```

## Windows

Install:

1. **Git for Windows:** Install from [git-scm.com](https://git-scm.com/). Git Bash must be available.
2. **C++ compiler:** Install MSYS2/MinGW-w64 or another `g++` provider.
3. **Node.js:** Install from [nodejs.org](https://nodejs.org/).
4. **VS Code**
5. **C/C++ Extension:** Install the Microsoft C/C++ extension.

Verify from the VS Code terminal:

```bash
bash --version
g++ --version
node --version
```

Requirement: `bash`, `g++`, and `node` must be available in PATH.

## Workspace

Open `cppWorkspace.code-workspace`.

Recommended layout:

- Open `testcpp.cpp` or `testJS.js` on the left.
- Open `input.txt` on the top right.
- Open `output.txt` on the bottom right.
