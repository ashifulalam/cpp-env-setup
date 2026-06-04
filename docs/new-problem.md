# New Problem

Create a templated problem file from a VS Code task.

## Run

1. Open Command Palette.
2. Run `Tasks: Run Task`.
3. Select `New Problem`.

## Flow

1. Choose folder with arrow keys.
2. Choose language with arrow keys.
3. Enter problem link.
4. Enter problem title.

The date is added automatically.

## Result

The task creates:

```text
problems/<folder>/<problem-title>.cpp
```

or:

```text
problems/<folder>/<problem-title>.js
```

It also clears `input.txt` and `output.txt`, remembers the new file as the current runner target, and tries to open it in VS Code.

## Defaults

Committed defaults:

```text
config/new-problem.defaults.json
```

Local last-used folder/language:

```text
config/.new-problem-state.json
```

The local state file is ignored by git.
