# Git Safety

- `config/.env` is ignored so the Gemini API key is not uploaded.
- `config/.complexity-cache.json` is ignored so local Gemini cache data is not uploaded.
- `config/.last-problem-file` is ignored so local runner state is not uploaded.
- Generated binaries are ignored so C++ runs do not pollute git status.
- `config/.env.example` is safe to commit because it contains placeholders only.

Before committing, check:

```bash
git status --short
```
