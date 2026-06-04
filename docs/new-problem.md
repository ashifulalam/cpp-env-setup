# New Problem

Create a templated problem file.

## VS Code

1. Open Command Palette.
2. Run `Tasks: Run Task`.
3. Select `New Problem`.

## Terminal

```bash
cd /Users/ashifulalam/Documents/workSpace/playGround
node .vscode/new-problem.js
```

Optional `~/.zshrc` shortcuts:

```bash
alias ps='cd /Users/ashifulalam/Documents/workSpace/playGround'
alias np='cd /Users/ashifulalam/Documents/workSpace/playGround && node .vscode/new-problem.js'
```

After editing `~/.zshrc`:

```bash
source ~/.zshrc
```

Use:

```bash
ps   # go to project
np   # create new problem
```

## Flow

1. Choose folder by number.
2. Choose language by number.
3. Enter problem link.
4. Enter problem title.

The date is added automatically.

Example:

```text
Choose folder:
  1. nsups
  2. codewars
Select number (Enter for 1): 1

Choose language:
  1. cpp
  2. js
Select number (Enter for 1): 1

Problem link: https://example.com/problem
Problem title: Compare the Triplets
```

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
