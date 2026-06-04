# Git Safety

- Ignored: `config/.env`, `config/.complexity-cache.json`, `config/.last-problem-file`.
- Ignored: generated binaries such as `output_bin`, `*.exe`, and `*.out`.
- Safe to commit: `config/.env.example`.

Check before committing:

```bash
git status --short
```
