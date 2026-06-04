# OneBugAway

A focused C++ and JavaScript problem-solving workspace for local VS Code and GitHub Codespaces.

OneBugAway uses one shared `input.txt`, one shared `output.txt`, and one default build task that runs the active C++ or JavaScript problem file.

![OneBugAway problem-solving workspace](images/one-bug-away-hero.svg)

## Features

- Run `.cpp` files with `g++`.
- Run `.js` files with Node.js.
- Read sample input from `input.txt`.
- Write program output to `output.txt`.
- Re-run from `input.txt` or `output.txt` using the last problem file.
- Use the same workflow on Mac, Windows, and GitHub Codespaces.
- Optionally estimate time and space complexity with Gemini.

## Quick Start

1. Open `cppWorkspace.code-workspace`.
2. Put sample input in `input.txt`.
3. Open the `.cpp` or `.js` problem file you want to run.
4. Press the shortcut for your environment.
5. Check the result in `output.txt`.

After running a problem file once, you can run again while focused on `input.txt` or `output.txt`.

## Shortcuts

| Where you are using it | Run shortcut | Notes |
| --- | --- | --- |
| Mac app | `Cmd + R` | Custom local shortcut after setup. |
| Mac app backup | `Cmd + Shift + B` | VS Code default build task shortcut. |
| Windows app | `Ctrl + Shift + B` | VS Code default build task shortcut. |
| Mac browser | `Cmd + Shift + B` | GitHub Codespaces shortcut. |
| Windows browser | `Ctrl + Shift + B` | GitHub Codespaces shortcut. |

## How It Runs

The default build task calls:

```bash
.vscode/run-active-problem.sh
```

The runner decides what to execute:

- Active `.cpp` file: compile and run with `g++`.
- Active `.js` file: run with Node.js.
- Active `input.txt` or `output.txt`: re-run the last problem file.
- No remembered problem file: use the most recently modified non-empty `.cpp` or `.js` file.

## Documentation

- [Setup Guide](docs/setup.md)
- [Codespaces Guide](docs/codespaces.md)
- [Running Code](docs/running-code.md)
- [Shortcut Guide](docs/shortcuts.md)
- [Gemini Complexity Estimate](docs/gemini-complexity.md)
- [Project Structure](docs/project-structure.md)
- [Workspace Cleanup](docs/workspace-cleanup.md)
- [Git Safety](docs/git-safety.md)

## Repository Layout

```text
.
|-- .devcontainer/              # GitHub Codespaces environment
|-- .vscode/                    # Runner, tasks, and editor settings
|-- config/                     # Local Gemini configuration
|-- docs/                       # Detailed documentation
|-- problems/                   # Saved problem solutions
|-- scripts/                    # Setup helper scripts
|-- input.txt                   # Shared sample input
|-- output.txt                  # Shared program output
|-- testJS.js                   # Scratch JavaScript file
`-- testcpp.cpp                 # Scratch C++ file
```
