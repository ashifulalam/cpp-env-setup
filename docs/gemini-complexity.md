# Gemini Complexity Estimate

Optional AI estimate after a successful run.

## Setup

```bash
cp config/.env.example config/.env
```

Edit `config/.env`:

```text
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
COMPLEXITY_ENABLED=true
COMPLEXITY_CACHE_ENABLED=true
```

Keep real API keys only in `config/.env`. It is ignored by git.

## Options

- `COMPLEXITY_ENABLED=false` disables Gemini.
- `COMPLEXITY_CACHE_ENABLED=true` reuses estimates for unchanged code.
- Cache file: `config/.complexity-cache.json`.

## Output

```text
Estimated complexity
Time     : O(n)
Space    : O(n)
Reason   : The solution scans the array once and stores seen values in a map.
```

This is an estimate, not a proof.
