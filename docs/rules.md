# Rules

Follow these rules while using this workspace.

## 1. Open The Workspace File

Always open:

```text
cppWorkspace.code-workspace
```

Do not open only the folder if you want the configured tasks and cleanup settings.

## 2. Use Shared Input And Output

1. Put sample input in `workspace/input.txt`.
2. Run the active `.cpp` or `.js` file.
3. Read the result from `workspace/output.txt`.

## 3. Keep Problems Organized

Save solved problems inside:

```text
problems/<platform>/<problem-name>.cpp
problems/<platform>/<problem-name>.js
```

Use lowercase file names with hyphens.

## 4. Use Templates For New Problems

Create new files with the `New Problem` task when possible.

Template files:

```text
problems/templates/cpp-template.cpp
problems/templates/js-template.js
```

## 5. Do Not Commit Local State

Do not commit:

```text
config/.env
config/.complexity-cache.json
config/.last-problem-file
config/.new-problem-state.json
workspace/input.txt
workspace/output.txt
output_bin
*.exe
*.out
```

## 6. Check Before Committing

Run:

```bash
git status --short
```

Commit only the files related to the current change.
