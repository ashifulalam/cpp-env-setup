# Workspace Cleanup

## Empty File Auto-Clear

If the active `.cpp` or `.js` file is empty, the runner clears both shared test files:

```text
input.txt
output.txt
```

The workspace also has an `Auto Clear Watcher` task in `.vscode/tasks.json`. It starts when the folder opens and watches the root practice files:

```text
testJS.js
testcpp.cpp
```

When either file becomes empty, the watcher clears `input.txt` and `output.txt`. This keeps stale input/output from staying around after you reset a practice file.

## Explorer Cleanup

`cppWorkspace.code-workspace` uses `files.exclude` to keep the Explorer clean.

Inside `files.exclude`:

```jsonc
"some-file-or-folder": true
```

means hide it from the Explorer.

```jsonc
"some-file-or-folder": false
```

means explicitly show it.

These settings only change what you see in the editor. They do not delete files and do not affect git.

Currently hidden examples include:

- `.git`
- `.vscode`
- `.gitignore`
- `config`
- `scripts`
- README files
- generated C++ binaries such as `output_bin`
- `images`
- `.env` files outside the visible config flow

To unhide a file or folder later, change its value to `false` or remove that line from `files.exclude`.

For example, to show README files in the Explorer again, change:

```jsonc
"**/README.md": true
```

to:

```jsonc
"**/README.md": false
```
