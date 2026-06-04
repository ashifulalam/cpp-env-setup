# Running Code

The default build task in `.vscode/tasks.json` calls `.vscode/run-active-problem.sh`.

## Runner Behavior

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

## Successful Run

After a successful run, the terminal looks like:

```text
Problem runner finished
Language : JavaScript
File     : testJS.js
Runtime  : 0.053s
```

## Failed Run

If C++ compilation fails, JavaScript crashes, or `input.txt` is missing, the runner prints a clearer failure message in the terminal.
