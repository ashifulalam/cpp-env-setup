# Codespaces Guide

This repository includes a dev container so GitHub Codespaces opens with C++, Node.js, and the recommended C/C++ extension ready to use.

## Open In Codespaces

1. Open the repository on GitHub.
2. Select **Code**.
3. Open the **Codespaces** tab.
4. Select **Create codespace on master**.

## Run Code

Use the same workflow as the local setup:

1. Put sample input in `input.txt`.
2. Open the `.cpp` or `.js` problem file you want to run.
3. Press `Ctrl + Shift + B` on Windows/Linux or `Cmd + Shift + B` on Mac.
4. Check the result in `output.txt`.

Browser shortcuts such as `Ctrl + R` or `Cmd + R` usually reload the page, so keep those for the local desktop app only.

## Sync Latest Changes

Inside an existing Codespace, run:

```bash
git pull
```

If Codespaces asks to rebuild the container after pulling `.devcontainer` changes, rebuild it.
