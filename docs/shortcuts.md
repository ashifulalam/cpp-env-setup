# Shortcut Guide

Use these shortcuts to run the same default build task:

| Where you are using it | Run shortcut | Notes |
| --- | --- | --- |
| Mac app | `Cmd + R` | Custom local shortcut after setup. |
| Mac app backup | `Cmd + Shift + B` | VS Code default build task shortcut. |
| Windows app | `Ctrl + Shift + B` | VS Code default build task shortcut. |
| Mac browser | `Cmd + Shift + B` | GitHub Codespaces shortcut. |
| Windows browser | `Ctrl + Shift + B` | GitHub Codespaces shortcut. |

## Set Up Cmd + R On macOS

By default, VS Code uses `Cmd + Shift + B` to run the build task.

To run this playground with `Cmd + R`:

1. Open Keyboard Shortcuts with `Cmd + K`, then `Cmd + S`.
2. Search for `Tasks: Run Build Task`.
3. Click the pencil icon beside `Tasks: Run Build Task`.
4. Press `Cmd + R`, then press Enter.
5. If VS Code shows a conflict with `Developer: Reload Window`, search for that command.
6. Right-click the `Cmd + R` keybinding for `Developer: Reload Window`.
7. Choose `Remove Keybinding`.

After this, `Cmd + R` runs the active `.cpp` or `.js` problem file and updates `output.txt`.
