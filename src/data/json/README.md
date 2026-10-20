# Data files

All vehicle data lives here as plain JSON so it can be served as an API later.

| File | Contents |
|---|---|
| `vehicles.json` | Makes and models. Years are `{ from, to, skip }`. Flags: `hybrid`, `fourWheel`. |
| `schedule.json` | General maintenance schedule: `base`, plus `hybrid` and `fourWheel` extras. |
| `guides.json` | How-to videos with `make`, `model`, `years: [from, to]`, `videoId`, `category`. |
| `brakes.json` | Brake pad/rotor picks with `position` (front/rear), `url` to buy, `rating`. |
| `oils.json` | `engines` (oil grade per make/model/engine/year range) and `brands` (picks by mileage). |

## Quality fields

- `source`: where the entry came from (a URL, or the manual and page). `null` means no source yet.
- `verified`: `true` only when the entry was checked against its `source`. Default `false`.
- `check` (oil engines only): `true` shows a "Verify" badge on the site for entries we're less sure about.

Current status: video guides cite the YouTube video itself (year range comes from the video title).
Everything else is from general knowledge and is **not** verified against owner's manuals yet.
When you confirm an entry, set its `source` and flip `verified` to `true`.
