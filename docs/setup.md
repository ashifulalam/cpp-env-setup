# Setup Guide

## macOS

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

Verify the required tools:

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

## Windows

Install these tools before using the playground locally on Windows:

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

## Open The Workspace

Open `cppWorkspace.code-workspace` instead of opening the folder directly. This applies the project-specific workspace settings.

Recommended layout:

- Open `testcpp.cpp` or `testJS.js` on the left.
- Open `input.txt` on the top right.
- Open `output.txt` on the bottom right.
