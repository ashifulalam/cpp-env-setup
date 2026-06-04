# Gemini Complexity Estimate

The runner can ask Gemini to estimate time and space complexity after a successful run.

Create a local config file:

```bash
cp config/.env.example config/.env
```

Then edit `config/.env`:

```text
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
COMPLEXITY_ENABLED=true
COMPLEXITY_CACHE_ENABLED=true
```

`config/.env` is ignored by git. Keep your real API key there only. Do not put a real key in `config/.env.example`.

Use `COMPLEXITY_ENABLED=false` when you want to run code without asking Gemini for a complexity estimate.

Use `COMPLEXITY_CACHE_ENABLED=true` to avoid repeated Gemini calls for unchanged code. The checker stores cached estimates in `config/.complexity-cache.json`, which is ignored by git.

When enabled, the terminal prints:

```text
Estimated complexity
Time     : O(n)
Space    : O(n)
Reason   : The solution scans the array once and stores seen values in a map.
```

If the same code is run again and caching is enabled, the heading shows:

```text
Estimated complexity (cached)
```

This is an AI estimate, not a mathematical guarantee. Use it as a helpful review.
