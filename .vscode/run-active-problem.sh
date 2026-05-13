#!/usr/bin/env bash
set -euo pipefail

WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ACTIVE_FILE="${1:-}"
INPUT_FILE="$WORKSPACE_DIR/input.txt"
OUTPUT_FILE="$WORKSPACE_DIR/output.txt"
BIN_FILE="$WORKSPACE_DIR/output_bin"

pick_latest_problem_file() {
  find "$WORKSPACE_DIR" \
    -maxdepth 1 \
    -type f \( -name "*.cpp" -o -name "*.js" \) \
    -print0 |
    while IFS= read -r -d '' file; do
      stat -f "%m %N" "$file"
    done |
    sort -rn |
    head -n 1 |
    cut -d " " -f 2-
}

case "$ACTIVE_FILE" in
  *.cpp | *.js)
    PROBLEM_FILE="$ACTIVE_FILE"
    ;;
  *)
    PROBLEM_FILE="$(pick_latest_problem_file)"
    ;;
esac

if [ -z "${PROBLEM_FILE:-}" ]; then
  echo "No .cpp or .js file found inside playGround."
  exit 1
fi

case "$PROBLEM_FILE" in
  *.cpp)
    g++ "$PROBLEM_FILE" -std=c++17 -O2 -Wall -o "$BIN_FILE"
    "$BIN_FILE" < "$INPUT_FILE" > "$OUTPUT_FILE"
    printf "Ran C++: %s\nOutput saved to output.txt\n" "$(basename "$PROBLEM_FILE")"
    ;;
  *.js)
    node "$PROBLEM_FILE" < "$INPUT_FILE" > "$OUTPUT_FILE"
    printf "Ran JavaScript: %s\nOutput saved to output.txt\n" "$(basename "$PROBLEM_FILE")"
    ;;
esac
