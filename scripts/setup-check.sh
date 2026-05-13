#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RUNNER="$ROOT_DIR/.vscode/run-active-problem.sh"

print_step() {
  printf "\n%s\n" "$1"
}

has_command() {
  command -v "$1" >/dev/null 2>&1
}

load_homebrew() {
  if has_command brew; then
    return 0
  fi

  if [ -x "/opt/homebrew/bin/brew" ]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
  elif [ -x "/usr/local/bin/brew" ]; then
    eval "$(/usr/local/bin/brew shellenv)"
  fi

  has_command brew
}

install_homebrew() {
  if load_homebrew; then
    return
  fi

  print_step "Homebrew is missing. Installing Homebrew..."
  NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  if ! load_homebrew; then
    echo "Homebrew was installed, but it is not available in PATH yet."
    echo "Restart the terminal, then run ./scripts/setup-check.sh again."
    exit 1
  fi
}

install_command_line_tools() {
  if xcode-select -p >/dev/null 2>&1; then
    return
  fi

  print_step "Command Line Tools are missing. Starting Apple's installer..."
  xcode-select --install || true
  echo "Finish the Command Line Tools installer, then run ./scripts/setup-check.sh again."
  exit 1
}

install_node() {
  if has_command node; then
    return
  fi

  install_homebrew
  print_step "Node.js is missing. Installing Node.js with Homebrew..."
  brew install node
}

install_gpp() {
  if has_command g++; then
    return
  fi

  install_command_line_tools
}

install_bash() {
  if has_command bash; then
    return
  fi

  install_homebrew
  print_step "Bash is missing. Installing Bash with Homebrew..."
  brew install bash
}

print_step "Checking playground dependencies..."

if [ "$(uname -s)" != "Darwin" ]; then
  echo "This setup checker is designed for macOS."
  exit 1
fi

install_command_line_tools
install_gpp
install_node
install_bash

chmod +x "$RUNNER"

print_step "Installed tools:"
g++ --version | head -n 1
node --version
bash --version | head -n 1

print_step "Setup check complete."
