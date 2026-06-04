# Running Code

Default task: `.vscode/run-active-problem.sh`.

## Behavior

- Active `.cpp`: compile and run with `g++`.
- Active `.js`: run with Node.js.
- Active `input.txt` or `output.txt`: re-run the last problem file.
- No remembered problem: run the most recently modified non-empty `.cpp` or `.js` file.

## Files

```text
input.txt   -> program input
output.txt  -> program output
```

## Terminal Output

```text
Problem runner finished
Language : JavaScript
File     : testJS.js
Runtime  : 0.053s
```

Failures print the language, file name, reason, and runtime.
