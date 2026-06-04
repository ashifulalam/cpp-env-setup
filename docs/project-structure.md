# Project Structure

## Important Files

- `.vscode/tasks.json` - VS Code build task configuration.
- `.vscode/run-active-problem.sh` - Main runner for C++ and JavaScript.
- `.vscode/complexity-check.js` - Gemini-powered complexity estimator.
- `.vscode/auto-clear-watcher.js` - Clears shared input/output when root practice files become empty.
- `.vscode/settings.json` - Small editor settings for this workspace.
- `.devcontainer/devcontainer.json` - GitHub Codespaces environment.
- `config/.env` - Your local Gemini API key file. Ignored by git.
- `config/.env.example` - Safe template showing which environment variables are needed.
- `config/.complexity-cache.json` - Local Gemini estimate cache. Ignored by git.
- `config/.last-problem-file` - Last problem file used by the runner. Ignored by git.
- `cppWorkspace.code-workspace` - Workspace settings for layout restore and Explorer cleanup.
- `scripts/setup-check.sh` - Mac setup checker.
- `problems/` - Saved problem solutions.
- `testcpp.cpp` - Active scratch C++ problem file.
- `testJS.js` - Active scratch JavaScript problem file.
- `input.txt` - Shared test input file.
- `output.txt` - Shared program output file.
- `images/` - README screenshot assets.

## Problems Folder

Use `problems/` to keep solved problems organized by platform, topic, or contest.

Example names:

```text
problems/codewars/
problems/nsups/
problems/hackerrank/
```
