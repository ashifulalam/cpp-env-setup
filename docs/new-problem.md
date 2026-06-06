# New Problem

Use this to create a templated problem file.

## 1. Start The Task

From VS Code:

1. Open Command Palette.
2. Run `Tasks: Run Task`.
3. Select `New Problem`.

From terminal:

```bash
cd /Users/ashifulalam/Documents/workSpace/playGround
node .vscode/new-problem.js
```

Optional shortcut:

```bash
alias np='cd /Users/ashifulalam/Documents/workSpace/playGround && node .vscode/new-problem.js'
```

## 2. Answer Prompts

1. Choose a folder.
2. Choose a language.
3. Enter the problem link.
4. Enter the problem title.

The date is added automatically.

## 3. Check The Result

The task creates one file:

```text
problems/<folder>/<problem-title>.cpp
problems/<folder>/<problem-title>.js
```

It also:

1. Clears `workspace/input.txt`.
2. Clears `workspace/output.txt`.
3. Remembers the new file as the current runner target.
4. Tries to open the file in VS Code.

## 4. Edit Templates

Template files:

```text
problems/templates/cpp-template.cpp
problems/templates/js-template.js
```

Edit these files to change generated starter code.

## 5. Edit Defaults

Committed defaults:

```text
config/new-problem.defaults.json
```

Ignored local state:

```text
config/.new-problem-state.json
```
