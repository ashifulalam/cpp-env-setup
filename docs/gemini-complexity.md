# Gemini Complexity Estimate

This is optional. When enabled, Gemini estimates time and space complexity after a successful run.

## 1. Create Local Config

```bash
cp config/.env.example config/.env
```

## 2. Add Your API Key

Edit `config/.env`:

```text
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
COMPLEXITY_ENABLED=true
COMPLEXITY_CACHE_ENABLED=true
```

Keep real API keys only in `config/.env`. It is ignored by git.

## 3. Configure Options

```text
COMPLEXITY_ENABLED=false
```

Disables Gemini.

```text
COMPLEXITY_CACHE_ENABLED=true
```

Reuses estimates for unchanged code.

Cache file:

```text
config/.complexity-cache.json
```

## 4. Read Output

Example:

```text
Estimated complexity
Time     : O(n)
Space    : O(n)
Reason   : The solution scans the array once and stores seen values in a map.
```

Treat this as an estimate, not a proof.
