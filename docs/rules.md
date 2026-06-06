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

## 7. Commit Rules

Do not bundle unrelated changes into one commit.

1. Commit one solved problem, bug fix, setup change, or documentation change at a time.
2. Stage only the files related to that specific change.
3. Leave unrelated modified files unstaged.
4. Before committing, check:

   ```bash
   git status --short
   git diff --cached --stat
   ```

5. If a file is not part of the current problem or fix, do not include it in the commit.

## 8. Commit Message Format

Use this format for every commit:

```text
Clear title that explains the solved problem

Detailed information:
- What was broken or missing.
- What changed.
- Why this fixes the problem.
- Any important notes for future review.
```

Example:

```text
Save dirty files before running active problem

Detailed information:
- VS Code was running old saved code when Cmd + R was pressed from workspace/input.txt or workspace/output.txt.
- Added task.saveBeforeRun so dirty .cpp and .js files are saved before the runner starts.
- This keeps the run output correct without manually saving the problem file first.
```
