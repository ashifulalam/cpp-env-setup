#!/usr/bin/env bash
set -euo pipefail

WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ACTIVE_FILE="${1:-}"
INPUT_FILE="$WORKSPACE_DIR/input.txt"
OUTPUT_FILE="$WORKSPACE_DIR/output.txt"
BIN_FILE="$WORKSPACE_DIR/output_bin"
LAST_PROBLEM_FILE="$WORKSPACE_DIR/config/.last-problem-file"

now_ms() {
  perl -MTime::HiRes=time -e 'printf "%.0f\n", time() * 1000'
}

format_duration() {
  awk "BEGIN { printf \"%.3fs\", $1 / 1000 }"
}

relative_path() {
  case "$1" in
    "$WORKSPACE_DIR"/*)
      printf "%s\n" "${1#"$WORKSPACE_DIR"/}"
      ;;
    *)
      printf "%s\n" "$1"
      ;;
  esac
}

file_mtime() {
  if stat -f "%m" "$1" >/dev/null 2>&1; then
    stat -f "%m" "$1"
  else
    stat -c "%Y" "$1"
  fi
}

pick_latest_problem_file() {
  find \
    "$WORKSPACE_DIR/testcpp.cpp" \
    "$WORKSPACE_DIR/testJS.js" \
    "$WORKSPACE_DIR/problems" \
    -type f \( -name "*.cpp" -o -name "*.js" \) \
    -not -path "*/templates/*" \
    -print0 |
    while IFS= read -r -d '' file; do
      if ! grep -q '[^[:space:]]' "$file"; then
        continue
      fi

      printf "%s\t%s\n" "$(file_mtime "$file")" "$file"
    done |
    sort -rn |
    head -n 1 |
    cut -f 2-
}

remember_problem_file() {
  mkdir -p "$(dirname "$LAST_PROBLEM_FILE")"
  printf "%s\n" "$PROBLEM_FILE" > "$LAST_PROBLEM_FILE"
}

pick_remembered_problem_file() {
  if [ ! -f "$LAST_PROBLEM_FILE" ]; then
    return
  fi

  local remembered_file
  remembered_file="$(cat "$LAST_PROBLEM_FILE")"

  if [ -f "$remembered_file" ] && grep -q '[^[:space:]]' "$remembered_file"; then
    printf "%s\n" "$remembered_file"
  fi
}

pick_problem_for_shared_io() {
  local remembered_file latest_file
  remembered_file="$(pick_remembered_problem_file || true)"
  latest_file="$(pick_latest_problem_file || true)"

  if [ -z "${remembered_file:-}" ]; then
    printf "%s\n" "$latest_file"
    return
  fi

  if [ -z "${latest_file:-}" ]; then
    printf "%s\n" "$remembered_file"
    return
  fi

  if [ "$latest_file" = "$remembered_file" ]; then
    printf "%s\n" "$remembered_file"
    return
  fi

  if [ "$(file_mtime "$latest_file")" -gt "$(file_mtime "$remembered_file")" ]; then
    printf "%s\n" "$latest_file"
  else
    printf "%s\n" "$remembered_file"
  fi
}

case "$ACTIVE_FILE" in
  *.cpp | *.js)
    RUN_CONTEXT="active-file"
    PROBLEM_FILE="$ACTIVE_FILE"
    ;;
  *)
    RUN_CONTEXT="shared-io"
    PROBLEM_FILE="$(pick_problem_for_shared_io)"
    ;;
esac

if [ -z "${PROBLEM_FILE:-}" ]; then
  if [ "${RUN_CONTEXT:-}" = "shared-io" ]; then
    echo "No saved .cpp or .js problem file was found."
    echo "Save the current problem file once, then run again from input.txt or output.txt."
  else
    echo "No .cpp or .js file found inside playGround."
  fi
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

remember_problem_file

RELATIVE_PROBLEM_FILE="$(relative_path "$PROBLEM_FILE")"

print_result() {
  printf "\n"
  printf "Problem runner finished ✅\n"
  printf "Running  : %s\n" "$RELATIVE_PROBLEM_FILE"
  printf "Language : %s\n" "$1"
  printf "File     : %s\n" "$(basename "$PROBLEM_FILE")"
  printf "Runtime  : %s\n" "$(format_duration "$2")"
}

print_failure() {
  printf "\n"
  printf "Running  : %s\n" "$RELATIVE_PROBLEM_FILE"
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
