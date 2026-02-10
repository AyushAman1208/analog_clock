# Analog Clock

Simple analog clock using HTML, CSS and JavaScript.

## Clone

Clone the repo:

```
git clone https://github.com/AyushAman1208/analog_clock.git
cd analog_clock
```

## Run

Option 1 — Open in browser:

Open `index.html` directly in your browser (double-click or use your browser's Open File). For example, open [index.html](index.html).

Option 2 — Serve with a simple HTTP server (recommended):

```
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use any static file server (e.g. `npx http-server`).

## Project files

- [index.html](index.html) — markup for the clock container and three hand elements.
- [style.css](style.css) — layout and sizing; positions the hands and sets `transform-origin` so rotations pivot at the bottom.
- [script.js](script.js) — updates the hand rotations every second.

## How the code works

1. A `setInterval` in `script.js` runs every 1000 ms and reads the current time with `new Date()`.
2. It extracts hours, minutes and seconds:

   - `hourRot = 30 * hour + minute / 2` — each hour = 30°, plus minutes add 0.5° per minute so the hour hand moves smoothly.
   - `minRot = 6 * minute` — each minute = 6° (360° / 60).
   - `secRot = 6 * second` — each second = 6°.

3. The code sets the CSS `transform: rotate(...)` on the three hand elements (IDs `hours`, `minutes`, `seconds`) to rotate them to the correct angles.

Notes and small improvements:

- The script relies on the browser exposing elements with IDs as global variables (e.g. `hours`). For robustness, you can replace those implicit globals with explicit references:

```
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
```

- `style.css` references a background image `th.jpeg`; ensure that file exists or remove that rule to avoid a missing-image background.

## Troubleshooting

- If the hands don't move, open the browser console to check for JS errors. If `hours`/`minutes`/`seconds` are undefined, add the explicit `getElementById` calls above.
- If layout is off on very small screens, adjust sizes in `style.css` (it uses viewport width units).

---

File location: [README.md](README.md)
