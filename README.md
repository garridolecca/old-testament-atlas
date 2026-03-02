# Old Testament Atlas — Interactive Bible Map

An interactive web application that brings the geography of the Old Testament to life. Explore all **39 books** of the Old Testament through an immersive, map-based experience powered by ArcGIS Maps SDK.

**[View Live Demo](https://garridolecca.github.io/old-testament-atlas/)**

## Features

- **All 39 Old Testament Books** — From Genesis to Malachi, every book has dedicated locations, events, and scripture references
- **Interactive Map** — Click any city marker to see biblical events that occurred there, with direct scripture quotes
- **Book & Category Filters** — Filter by individual book or by category (Law, History, Wisdom, Major Prophets, Minor Prophets)
- **Journey Routes** — Visualized travel routes for Abraham's journey, the Exodus, Joshua's conquest, Jonah's flight, the Exile, and more
- **Scripture Panel** — Browse events organized by book and chapter, with event counts and quick navigation
- **Bilingual Support** — Full English and Spanish translations for all UI elements and book names
- **Color-Coded Themes** — Each of the 39 books has a unique color theme for easy identification
- **Responsive Design** — Works on desktop and mobile with adaptive bottom sheet and touch gestures

## Tech Stack

- **ArcGIS Maps SDK for JavaScript 4.31** — Map rendering and geospatial visualization
- **CartoDB Positron Dark** — Dark basemap tiles (no API key required)
- **Vanilla JavaScript (ES Modules)** — Zero dependencies, no build step
- **CSS Custom Properties** — Dynamic theming with 39 unique book colors
- **Google Fonts** — Cinzel (display) + Inter (body) for a biblical manuscript aesthetic

## Book Categories

| Category | Books | Color |
|----------|-------|-------|
| **Law (Torah)** | Genesis, Exodus, Leviticus, Numbers, Deuteronomy | Gold tones |
| **History** | Joshua through Esther (12 books) | Blue/Purple tones |
| **Wisdom & Poetry** | Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon | Amber/Gray tones |
| **Major Prophets** | Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel | Green/Teal tones |
| **Minor Prophets** | Hosea through Malachi (12 books) | Rose/Earth tones |

## Getting Started

This is a zero-dependency static site. Simply serve the files with any HTTP server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8080
```

Then open `http://localhost:8080` in your browser.

> **Note:** ES Modules require an HTTP server — opening `index.html` directly via `file://` will not work.

## Project Structure

```
old-testament-atlas/
├── index.html          # Main HTML shell
├── css/
│   └── styles.css      # Dark biblical theme, 39 book colors, responsive layout
└── js/
    ├── app.js          # Map initialization, interactions, UI logic
    ├── data.js         # All 39 books, 60+ cities, 150+ events, 14 routes
    └── i18n.js         # English/Spanish translations
```

## Data Coverage

- **39 Old Testament Books** with metadata, themes, and date ranges
- **60+ Biblical Locations** with accurate coordinates
- **150+ Historical Events** with scripture references and quotes
- **14 Journey Routes** including Abraham's travels, the Exodus, David's flight, Jonah, and more

## Credits

Inspired by [Paul's Journeys](https://github.com/garridolecca/pauls-journeys) interactive map application.

Built with [ArcGIS Maps SDK](https://developers.arcgis.com/javascript/) and [CartoDB](https://carto.com/) basemap tiles.
