# Project Structure

## Files

- `.vscode/tasks.json` - VS Code build task configuration.
- `.vscode/run-active-problem.sh` - C++/JavaScript runner.
- `.vscode/complexity-check.js` - Gemini-powered complexity estimator.
- `.vscode/auto-clear-watcher.js` - Clears shared input/output when scratch files become empty.
- `.vscode/settings.json` - Editor settings.
- `.devcontainer/devcontainer.json` - GitHub Codespaces environment.
- `config/.env` - Local Gemini API key file. Ignored by git.
- `config/.env.example` - Safe environment template.
- `config/.complexity-cache.json` - Gemini cache. Ignored by git.
- `config/.last-problem-file` - Last runner target. Ignored by git.
- `cppWorkspace.code-workspace` - Layout and Explorer settings.
- `scripts/setup-check.sh` - Mac setup checker.
- `problems/` - Saved problem solutions.
- `testcpp.cpp` - Scratch C++ file.
- `testJS.js` - Scratch JavaScript file.
- `input.txt` - Shared input.
- `output.txt` - Shared output.
- `images/` - README assets.

## Problems

Organize saved solutions by platform, topic, or contest:

```text
problems/codewars/
problems/nsups/
problems/hackerrank/
```
