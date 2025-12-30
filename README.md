# C++ Competitive Programming Setup (Mac)

This repository contains my automated C++ environment for Competitive Programming. It is designed to allow side-by-side coding, input entry, and output viewing with a single keyboard shortcut.

![VS Code Competitive Programming Setup](images/setUp.png)

## 🛠 Requirements

Before running this setup on a new Mac device, install the following:

1.  **Command Line Tools (Clang/G++):**
    ```bash
    xcode-select --install
    ```
2.  **Visual Studio Code:** Download from [here](https://code.visualstudio.com/).
3.  **C/C++ Extension:** Install the Microsoft C/C++ extension in VS Code.

---

## 🚀 How to Use

### 1. The Layout

- Open your `.cpp` file on the **left**.
- Open `input.txt` on the **top right**.
- Open `output.txt` on the **bottom right**.

### 2. Running Code

The "Smart Task" in `.vscode/tasks.json` automatically finds the most recently modified `.cpp` file. This means you can trigger the run even while your cursor is inside `input.txt`.

- **Shortcut:** `Cmd + R` (See configuration below)
- **What happens:** 1. Compiles the latest `.cpp` file. 2. Pipes `input.txt` into the program. 3. Updates `output.txt` instantly. 4. Terminal remains hidden for a clean workspace.

---

## ⌨️ Setting up the Shortcut (Important)

By default, VS Code uses `Cmd + Shift + B` for builds. To change it to **`Cmd + R`** on a new device:

1.  In VS Code, press `Cmd + K` then `Cmd + S` to open **Keyboard Shortcuts**.
2.  Search for `Tasks: Run Build Task`.
3.  Click the **plus (+)** or **pencil icon** to change the binding.
4.  Press **`Cmd + R`** and hit **Enter**.
5.  **Conflict Check:** If `Cmd + R` is tied to "Reload Window," right-click that entry and select **Remove Keybinding** to allow your build task to run.

---

## 📂 File Structure

- `.vscode/` - Contains `tasks.json` (The "Smart" build logic).
- `images/setUp.png` - Workspace screenshot.
- `input.txt` - Place test cases here.
- `output.txt` - Results appear here automatically.
- `*.cpp` - Your C++ source files.
