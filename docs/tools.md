# Tools

Common helper commands for this workspace.

## New Problem

VS Code:

```text
Cmd + Shift + P
Tasks: Run Task
New Problem
```

Terminal:

```bash
cd /Users/ashifulalam/Documents/workSpace/playGround
node .vscode/new-problem.js
```

Optional `~/.zshrc`:

```bash
alias ps='cd /Users/ashifulalam/Documents/workSpace/playGround'
alias np='cd /Users/ashifulalam/Documents/workSpace/playGround && node .vscode/new-problem.js'
```

Use:

```bash
ps   # go to project
np   # create new problem
```

Details: [New Problem](new-problem.md)

## Toggle Explorer Cleanup

VS Code:

```text
Cmd + Shift + P
Tasks: Run Task
Toggle Explorer Cleanup
```

This switches the Explorer between clean view and full view.

Details: [Workspace Cleanup](workspace-cleanup.md)
