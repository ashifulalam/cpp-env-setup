# Workspace Cleanup

## Empty File Auto-Clear

If the active `.cpp` or `.js` file is empty, the runner clears:

```text
input.txt
output.txt
```

The `Auto Clear Watcher` task also watches:

```text
testJS.js
testcpp.cpp
```

When either file becomes empty, it clears `input.txt` and `output.txt`.

## Explorer Cleanup

`cppWorkspace.code-workspace` uses `files.exclude`.

```jsonc
"some-file-or-folder": true
```

```jsonc
"some-file-or-folder": false
```

`true` hides a file or folder. `false` shows it.

Hidden examples:

- `.git`
- `.vscode`
- `.gitignore`
- `config`
- `scripts`
- README files
- generated C++ binaries such as `output_bin`
- `images`
- `.env` files outside the visible config flow

Explorer cleanup does not delete files and does not affect git.
