#!/usr/bin/env bash
set -euo pipefail

WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ACTIVE_FILE="${1:-}"
INPUT_FILE="$WORKSPACE_DIR/input.txt"
OUTPUT_FILE="$WORKSPACE_DIR/output.txt"
BIN_FILE="$WORKSPACE_DIR/output_bin"

now_ms() {
  perl -MTime::HiRes=time -e 'printf "%.0f\n", time() * 1000'
}

format_duration() {
  awk "BEGIN { printf \"%.3fs\", $1 / 1000 }"
}

file_mtime() {
  if stat -f "%m" "$1" >/dev/null 2>&1; then
    stat -f "%m" "$1"
  else
    stat -c "%Y" "$1"
  fi
}

pick_latest_problem_file() {
  find "$WORKSPACE_DIR" \
    -type f \( -name "*.cpp" -o -name "*.js" \) \
    -not -path "*/.git/*" \
    -not -path "*/node_modules/*" \
    -print0 |
    while IFS= read -r -d '' file; do
      printf "%s\t%s\n" "$(file_mtime "$file")" "$file"
    done |
    sort -rn |
    head -n 1 |
    cut -f 2-
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

if [ ! -f "$INPUT_FILE" ]; then
  echo "Runner error: input.txt was not found."
  echo "Create input.txt in the playground folder and try again."
  exit 1
fi

if ! grep -q '[^[:space:]]' "$PROBLEM_FILE"; then
  > "$INPUT_FILE"
  > "$OUTPUT_FILE"
  printf "\n"
  printf "Problem file is empty. Cleared input.txt and output.txt.\n"
  exit 0
fi

print_result() {
  printf "\n"
  printf "Problem runner finished\n"
  printf "Language : %s\n" "$1"
  printf "File     : %s\n" "$(basename "$PROBLEM_FILE")"
  printf "Runtime  : %s\n" "$(format_duration "$2")"
}

print_failure() {
  printf "\n"
  printf "Problem runner failed\n"
  printf "Language : %s\n" "$1"
  printf "File     : %s\n" "$(basename "$PROBLEM_FILE")"
  printf "Reason   : %s\n" "$2"
  printf "Runtime  : %s\n" "$(format_duration "$3")"
}

print_complexity_estimate() {
  node "$WORKSPACE_DIR/.vscode/complexity-check.js" "$PROBLEM_FILE" || true
}

case "$PROBLEM_FILE" in
  *.cpp)
    START_MS="$(now_ms)"

    if g++ "$PROBLEM_FILE" -std=c++17 -O2 -Wall -o "$BIN_FILE"; then
      :
    else
      END_MS="$(now_ms)"
      print_failure "C++" "Compilation failed. Check the compiler errors above." "$((END_MS - START_MS))"
      exit 1
    fi

    START_MS="$(now_ms)"

    if "$BIN_FILE" < "$INPUT_FILE" > "$OUTPUT_FILE"; then
      :
    else
      STATUS="$?"
      END_MS="$(now_ms)"
      print_failure "C++" "Program exited with status $STATUS." "$((END_MS - START_MS))"
      exit "$STATUS"
    fi

    END_MS="$(now_ms)"
    print_result "C++" "$((END_MS - START_MS))"
    print_complexity_estimate
    ;;
  *.js)
    START_MS="$(now_ms)"

    if node "$PROBLEM_FILE" < "$INPUT_FILE" > "$OUTPUT_FILE"; then
      :
    else
      STATUS="$?"
      END_MS="$(now_ms)"
      print_failure "JavaScript" "Program exited with status $STATUS. Check the error above." "$((END_MS - START_MS))"
      exit "$STATUS"
    fi

    END_MS="$(now_ms)"
    print_result "JavaScript" "$((END_MS - START_MS))"
    print_complexity_estimate
    ;;
esac
