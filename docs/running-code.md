# Running Code

The default build task runs `.vscode/run-active-problem.sh`.

## 1. Choose A Problem File

Open a `.cpp` or `.js` file.

Supported files:

```text
*.cpp
*.js
```

## 2. Add Input

Put sample input in:

```text
workspace/input.txt
```

## 3. Run

Use one shortcut:

| Environment | Shortcut |
| --- | --- |
| macOS custom local shortcut | `Cmd + R` |
| macOS default task | `Cmd + Shift + B` |
| Windows/Linux default task with Bash | `Ctrl + Shift + B` |

## 4. Read Output

Program output is written to:

```text
workspace/output.txt
```

The terminal also prints the file, language, runtime, and failures.

## Runner Behavior

1. Active `.cpp` files compile with `g++`.
2. Active `.js` files run with Node.js.
3. If `workspace/input.txt` or `workspace/output.txt` is active, the runner reuses the current problem file.
4. If there is no current problem file, the runner uses the most recently modified non-empty `.cpp` or `.js` file.
5. Editing and saving a non-empty problem file makes it the current runner target.
6. If the active problem file is empty, the runner clears `workspace/input.txt` and `workspace/output.txt`.

Before running a task, VS Code saves dirty files first. This keeps `Cmd + R` accurate even when `workspace/input.txt` or `workspace/output.txt` is active.
