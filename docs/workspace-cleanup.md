# Workspace Cleanup

Cleanup hides workspace noise and clears shared input/output in specific cases.

## Auto-Clear Behavior

The runner clears these files when the active `.cpp` or `.js` file is empty:

```text
workspace/input.txt
workspace/output.txt
```

The `Auto Clear Watcher` watches:

```text
workspace/testJS.js
workspace/testcpp.cpp
problems/**/*.cpp
problems/**/*.js
```

Watcher behavior:

1. A watched non-empty file becomes the current runner target when saved.
2. A watched empty file clears `workspace/input.txt` and `workspace/output.txt`.

## Toggle Explorer Cleanup

1. Open Command Palette.
2. Run `Tasks: Run Task`.
3. Select `Toggle Explorer Cleanup`.

This toggles `files.exclude` in `cppWorkspace.code-workspace`.

Rules:

```jsonc
"some-file-or-folder": true
```

`true` hides it.

```jsonc
"some-file-or-folder": false
```

`false` shows it.

Explorer cleanup does not delete files and does not affect git.
