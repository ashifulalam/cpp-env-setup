# Git Safety

Use this checklist before committing.

## 1. Check Status

```bash
git status --short
```

## 2. Do Not Commit Secrets

Ignored local files:

```text
config/.env
config/.complexity-cache.json
config/.last-problem-file
config/.new-problem-state.json
```

Safe config template:

```text
config/.env.example
```

## 3. Do Not Commit Build Output

Ignored generated files:

```text
output_bin
output_bin.exe
output_bin.dSYM/
*.exe
*.out
```
