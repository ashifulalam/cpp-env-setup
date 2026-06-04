# Setup Guide

## macOS

Install:

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

Verify:

```bash
g++ --version
node --version
bash --version
```

Optional setup checker:

```bash
cd /path/to/playGround
chmod +x scripts/setup-check.sh
./scripts/setup-check.sh
```

The checker verifies tools, installs missing basics where possible, and makes the runner executable.

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
