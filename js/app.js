// ============================================
// OLD TESTAMENT ATLAS — APP
// Main application logic
// ============================================

import { books, cities, routes, scriptureIndex, allChapters } from './data.js';
import { lang, t, setLang, applyTranslations, displayVerse, bookTranslations } from './i18n.js';

let activeBook = 'all';
let activeCategory = 'all';
let selectedCity = null;
let selectedChapter = null;
let mapView = null;
let Map, MapView, GraphicsLayer, Graphic, Point, Polyline, SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol, WebTileLayer;
let routesLayer, citiesLayer, labelsLayer, highlightLayer;
let navigableCities = [];
let navIndex = 0;

// --- LANGUAGE SELECTOR ---
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const chosen = btn.getAttribute('data-lang');
    setLang(chosen);
    applyTranslations();
    document.getElementById('langSelector').style.display = 'none';
    document.getElementById('splash').style.display = 'flex';
    animateProgress();
    initMap();
  });
});

function animateProgress() {
  const bar = document.getElementById('progressBar');
  let w = 0;
  const interval = setInterval(() => {
    w += Math.random() * 8;
    if (w > 90) w = 90;
    bar.style.width = w + '%';
    if (w >= 90) clearInterval(interval);
  }, 200);
  window._progressInterval = interval;
  window._progressBar = bar;
}

// --- MAP INITIALIZATION ---
async function initMap() {
  try {
    console.log('[OT Atlas] Loading ArcGIS modules...');
    const modules = await new Promise((resolve, reject) => {
      require([
        "esri/Map","esri/views/MapView","esri/layers/GraphicsLayer",
        "esri/Graphic","esri/geometry/Point","esri/geometry/Polyline",
        "esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol",
        "esri/symbols/TextSymbol","esri/layers/WebTileLayer"
      ], (...mods) => { console.log('[OT Atlas] Modules loaded'); resolve(mods); },
         (err) => { console.error('[OT Atlas] Module load error:', err); reject(err); });
    });

    [Map, MapView, GraphicsLayer, Graphic, Point, Polyline,
     SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol, WebTileLayer] = modules;

    const basemap = new WebTileLayer({
      urlTemplate: "https://{subDomain}.basemaps.cartocdn.com/light_all/{level}/{col}/{row}.png",
      subDomains: ["a","b","c","d"],
      copyright: "CartoDB"
    });

    const map = new Map({ layers: [basemap] });

    routesLayer = new GraphicsLayer({ id: "routes-layer" });
    citiesLayer = new GraphicsLayer({ id: "cities-layer" });
    labelsLayer = new GraphicsLayer({ id: "labels-layer" });
    highlightLayer = new GraphicsLayer({ id: "highlight-layer" });
    map.addMany([routesLayer, citiesLayer, labelsLayer, highlightLayer]);

    mapView = new MapView({
      container: "viewDiv",
      map: map,
      center: [37, 32],
      zoom: 5,
      constraints: { minZoom: 3, maxZoom: 12 },
      ui: { components: [] },
      navigation: { mouseWheelZoomEnabled: true }
    });

    console.log('[OT Atlas] Waiting for MapView...');
    await mapView.when();
    console.log('[OT Atlas] MapView ready!');

    if (window._progressInterval) clearInterval(window._progressInterval);
    if (window._progressBar) window._progressBar.style.width = '100%';

    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
    }, 600);

    window._mapView = mapView; // expose for testing
    generateBookChips();
    drawAll();
    setupEventListeners();
    generateLegend();

  } catch (err) {
    console.error('Map init failed:', err);
  }
}

// --- HELPERS ---
// Determine if we're in "overview" mode (all books, no specific filter)
function isOverview() {
  return activeBook === 'all' && activeCategory === 'all' && !selectedChapter;
}

// Get the ordered cities for a specific book, sorted by event order
function getBookOrderedCities(bookId) {
  const bookCities = cities.filter(c => c.books.includes(bookId));
  // Sort by the minimum event order in this book
  return bookCities.sort((a, b) => {
    const aOrder = Math.min(...a.events.filter(e => e.book === bookId).map(e => e.order));
    const bOrder = Math.min(...b.events.filter(e => e.book === bookId).map(e => e.order));
    return aOrder - bOrder;
  });
}

// Get order number for a city within a book
function getCityOrderInBook(city, bookId) {
  const ordered = getBookOrderedCities(bookId);
  return ordered.findIndex(c => c.id === city.id) + 1;
}

// --- GENERATE BOOK CHIPS ---
function generateBookChips() {
  const container = document.getElementById('bookChips');
  container.innerHTML = '';

  const allChip = document.createElement('button');
  allChip.className = 'book-chip' + (activeBook === 'all' ? ' active' : '');
  allChip.setAttribute('data-book', 'all');
  allChip.innerHTML = `<span class="chip-dot" style="background:var(--gold)"></span><span class="chip-label">${t('allJourneys')}</span>`;
  container.appendChild(allChip);

  const filteredBooks = activeCategory === 'all'
    ? books
    : books.filter(b => b.category === activeCategory);

  filteredBooks.forEach(book => {
    const chip = document.createElement('button');
    chip.className = 'book-chip' + (activeBook === book.id ? ' active' : '');
    chip.setAttribute('data-book', book.id);
    const tr = bookTranslations[lang]?.[book.id] || bookTranslations.en[book.id];
    chip.innerHTML = `<span class="chip-dot" style="background:${book.hexColor}"></span><span class="chip-label">${tr.shortName}</span>`;
    container.appendChild(chip);
  });

  container.querySelectorAll('.book-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.book-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const bookId = chip.getAttribute('data-book');
      activeBook = bookId === 'all' ? 'all' : parseInt(bookId);
      selectedChapter = null;
      closeBottomSheet();
      refresh();

      if (activeBook !== 'all') {
        zoomToBook(activeBook);
        // Auto-open scripture panel linked to this book
        openScripturePanelForContext();
      } else {
        mapView.goTo({ center: [37, 32], zoom: 5 }, { duration: 800 });
        document.getElementById('scripturePanel').classList.remove('open');
      }
    });
  });
}

// --- DRAWING FUNCTIONS ---
function drawAll() {
  placedLabels = []; // Reset collision tracker
  drawRoutes();
  drawGeoLabels();  // Geo labels first (background context)
  drawCities();     // City labels on top (check collisions against geo labels too)
}

function refresh() {
  routesLayer.removeAll();
  citiesLayer.removeAll();
  labelsLayer.removeAll();
  highlightLayer.removeAll();
  drawAll();
}

function drawRoutes() {
  routesLayer.removeAll();
  const overview = isOverview();

  routes.forEach(route => {
    if (activeBook !== 'all' && route.book !== activeBook) return;
    if (activeCategory !== 'all') {
      const book = books.find(b => b.id === route.book);
      if (!book || book.category !== activeCategory) return;
    }
    const book = books.find(b => b.id === route.book);
    if (!book) return;
    const [r, g, b] = book.color;

    // Lower opacity in overview mode to reduce clutter
    const alphaOut = overview ? 0.25 : 0.8;
    const alphaRet = overview ? 0.15 : 0.5;
    const widthOut = overview ? 2 : 3;

    if (route.outbound && route.outbound.length > 1) {
      const paths = route.outbound.map(p => [p[0], p[1]]);
      routesLayer.add(new Graphic({
        geometry: new Polyline({ paths: [paths], spatialReference: { wkid: 4326 } }),
        symbol: new SimpleLineSymbol({
          color: [r, g, b, alphaOut], width: widthOut, style: "solid",
          cap: "round", join: "round"
        })
      }));
    }

    if (route.returnPath && route.returnPath.length > 1) {
      const paths = route.returnPath.map(p => [p[0], p[1]]);
      routesLayer.add(new Graphic({
        geometry: new Polyline({ paths: [paths], spatialReference: { wkid: 4326 } }),
        symbol: new SimpleLineSymbol({
          color: [r, g, b, alphaRet], width: 2, style: "dash",
          cap: "round", join: "round"
        })
      }));
    }
  });
}

function drawCities() {
  citiesLayer.removeAll();
  labelsLayer.removeAll();
  const filtered = getFilteredCities();
  const overview = isOverview();
  const showNumbers = activeBook !== 'all';

  filtered.forEach(city => {
    const bookColor = getCityColor(city);
    const baseSize = city.significance === 'major' ? 14 : city.significance === 'moderate' ? 10 : 7;
    // Lower opacity in overview mode
    const markerAlpha = overview ? 0.35 : 0.9;
    const labelAlpha = overview ? 0.45 : 0.9;
    const size = showNumbers ? Math.max(baseSize, 16) : baseSize;

    // Numbered markers when a specific book is selected
    if (showNumbers) {
      const order = getCityOrderInBook(city, activeBook);

      // Circle background
      citiesLayer.add(new Graphic({
        geometry: new Point({ longitude: city.lng, latitude: city.lat, spatialReference: { wkid: 4326 } }),
        symbol: new SimpleMarkerSymbol({
          color: [...bookColor, 0.9],
          size: size,
          outline: { color: [255, 255, 255, 0.9], width: 2 },
          style: "circle"
        }),
        attributes: { cityId: city.id, name: city.biblicalName, significance: city.significance }
      }));

      // Number inside the circle
      citiesLayer.add(new Graphic({
        geometry: new Point({ longitude: city.lng, latitude: city.lat, spatialReference: { wkid: 4326 } }),
        symbol: new TextSymbol({
          text: String(order),
          color: [255, 255, 255, 1],
          font: { size: 9, family: "Inter, sans-serif", weight: "bold" },
          haloColor: [0, 0, 0, 0],
          haloSize: 0,
          yoffset: 0
        }),
        attributes: { cityId: city.id, name: city.biblicalName, significance: city.significance }
      }));
    } else {
      // Regular dot markers
      citiesLayer.add(new Graphic({
        geometry: new Point({ longitude: city.lng, latitude: city.lat, spatialReference: { wkid: 4326 } }),
        symbol: new SimpleMarkerSymbol({
          color: [...bookColor, markerAlpha],
          size: size,
          outline: { color: [255, 255, 255, overview ? 0.4 : 0.8], width: overview ? 0.5 : 1.5 },
          style: "circle"
        }),
        attributes: { cityId: city.id, name: city.biblicalName, significance: city.significance }
      }));
    }

    // Label — zoom-tiered visibility with collision detection
    const zoom = mapView ? mapView.zoom : 5;
    let showLabel = false;

    if (showNumbers) {
      // When a book is selected, always show labels
      showLabel = true;
    } else if (city.significance === 'major') {
      // Top-tier landmarks visible at zoom >= 4, but at very wide zoom only a handful
      if (zoom >= 7) showLabel = true;
      else if (zoom >= 5.5) showLabel = true;
      else {
        // At widest zoom, only show the absolute top landmarks
        const topLandmarks = ['jerusalem','babel','sinai','nineveh','ur','memphis','susa','damascus'];
        showLabel = topLandmarks.includes(city.id);
      }
    } else if (city.significance === 'moderate') {
      showLabel = zoom >= 7;
    } else {
      // minor
      showLabel = zoom >= 8.5;
    }

    if (showLabel) {
      const fontSize = city.significance === 'major' ? (zoom < 6 ? 10 : 11) : 9;
      const screenPt = mapView.toScreen({ x: city.lng, y: city.lat, spatialReference: { wkid: 4326 } });
      const estWidth = city.biblicalName.length * fontSize * 0.55;
      const estHeight = fontSize * 1.4;
      const yOff = size + 4;
      const labelBox = {
        x: screenPt.x - estWidth / 2,
        y: screenPt.y - yOff - estHeight,
        w: estWidth,
        h: estHeight
      };

      if (!labelCollides(labelBox)) {
        placedLabels.push(labelBox);
        labelsLayer.add(new Graphic({
          geometry: new Point({ longitude: city.lng, latitude: city.lat, spatialReference: { wkid: 4326 } }),
          symbol: new TextSymbol({
            text: city.biblicalName,
            color: [44, 36, 24, labelAlpha],
            font: { size: fontSize, family: "Cinzel, serif", weight: "normal" },
            haloColor: [255, 255, 255, 0.85],
            haloSize: 2,
            yoffset: yOff
          })
        }));
      }
    }
  });
}

// --- LABEL COLLISION DETECTION ---
let placedLabels = [];

function labelCollides(box) {
  const pad = 4; // padding between labels
  for (const placed of placedLabels) {
    if (box.x < placed.x + placed.w + pad &&
        box.x + box.w + pad > placed.x &&
        box.y < placed.y + placed.h + pad &&
        box.y + box.h + pad > placed.y) {
      return true;
    }
  }
  return false;
}

function drawGeoLabels() {
  const zoom = mapView ? mapView.zoom : 5;
  const geoLabels = [
    { text: "EGYPT", lat: 27.5, lng: 30.5, size: 14, style: "normal", minZoom: 3 },
    { text: "ASSYRIA", lat: 35.5, lng: 43.0, size: 14, style: "normal", minZoom: 3 },
    { text: "BABYLONIA", lat: 31.5, lng: 45.5, size: 14, style: "normal", minZoom: 3 },
    { text: "PERSIA", lat: 31.0, lng: 52.0, size: 14, style: "normal", minZoom: 3 },
    { text: "Mediterranean Sea", lat: 34.0, lng: 31.0, size: 12, style: "italic", minZoom: 3 },
    { text: "CANAAN", lat: 32.5, lng: 35.0, size: 12, style: "normal", minZoom: 5 },
    { text: "ARAM", lat: 34.5, lng: 37.5, size: 10, style: "normal", minZoom: 5.5 },
    { text: "Red Sea", lat: 26.5, lng: 35.0, size: 11, style: "italic", minZoom: 5 },
    { text: "Persian Gulf", lat: 28.0, lng: 50.0, size: 11, style: "italic", minZoom: 4 },
    { text: "SINAI", lat: 29.0, lng: 33.5, size: 10, style: "normal", minZoom: 6 },
    { text: "EDOM", lat: 30.2, lng: 35.3, size: 10, style: "normal", minZoom: 7 },
    { text: "MOAB", lat: 31.3, lng: 36.0, size: 10, style: "normal", minZoom: 7 },
    { text: "Dead Sea", lat: 31.5, lng: 35.55, size: 9, style: "italic", minZoom: 7 },
    { text: "Sea of Galilee", lat: 32.82, lng: 35.58, size: 8, style: "italic", minZoom: 7.5 },
    { text: "PHOENICIA", lat: 34.0, lng: 35.5, size: 9, style: "normal", minZoom: 7.5 }
  ];

  geoLabels.forEach(lbl => {
    if (zoom < lbl.minZoom) return;

    const screenPt = mapView.toScreen({ x: lbl.lng, y: lbl.lat, spatialReference: { wkid: 4326 } });
    const estWidth = lbl.text.length * lbl.size * 0.55;
    const estHeight = lbl.size * 1.4;
    const geoBox = {
      x: screenPt.x - estWidth / 2,
      y: screenPt.y - estHeight / 2,
      w: estWidth,
      h: estHeight
    };

    if (!labelCollides(geoBox)) {
      placedLabels.push(geoBox);
      labelsLayer.add(new Graphic({
        geometry: new Point({ longitude: lbl.lng, latitude: lbl.lat, spatialReference: { wkid: 4326 } }),
        symbol: new TextSymbol({
          text: lbl.text,
          color: [80, 70, 60, lbl.style === "italic" ? 0.35 : 0.3],
          font: {
            size: lbl.size,
            family: lbl.style === "italic" ? "Inter, sans-serif" : "Cinzel, serif",
            weight: "normal",
            style: lbl.style
          },
          haloColor: [255, 255, 255, 0.4],
          haloSize: 1
        })
      }));
    }
  });
}

// --- FILTERING ---
function getFilteredCities() {
  return cities.filter(city => {
    if (activeBook !== 'all' && !city.books.includes(activeBook)) return false;
    if (activeCategory !== 'all') {
      const hasBookInCategory = city.books.some(bId => {
        const book = books.find(b => b.id === bId);
        return book && book.category === activeCategory;
      });
      if (!hasBookInCategory) return false;
    }
    if (selectedChapter) {
      const hasEvent = city.events.some(e =>
        e.bookName === selectedChapter.bookName && e.chapter === selectedChapter.chapter
      );
      if (!hasEvent) return false;
    }
    return true;
  });
}

function getCityColor(city) {
  if (activeBook !== 'all') {
    const book = books.find(b => b.id === activeBook);
    return book ? book.color : [201, 168, 76];
  }
  const firstBookId = city.books[0];
  const book = books.find(b => b.id === firstBookId);
  return book ? book.color : [201, 168, 76];
}

// --- BOTTOM SHEET ---
function openBottomSheet(city) {
  selectedCity = city;
  const sheet = document.getElementById('bottomSheet');
  document.getElementById('sheetTitle').textContent = city.biblicalName;
  document.getElementById('sheetSubtitle').textContent = `${city.modernName} \u2022 ${city.region}`;

  const body = document.getElementById('sheetBody');
  const events = activeBook !== 'all'
    ? city.events.filter(e => e.book === activeBook)
    : city.events;

  if (events.length === 0) {
    body.innerHTML = `<p style="color:var(--text-muted);padding:20px 0;">${t('noEvents')}</p>`;
  } else {
    body.innerHTML = events.map(event => {
      const tr = bookTranslations[lang]?.[event.book] || bookTranslations.en[event.book];
      return `
        <div class="event-card" data-book="${event.book}">
          <div class="event-header">
            <span class="book-tag" data-book="${event.book}">${tr.name}</span>
            <span class="event-action">${event.action}</span>
          </div>
          <p class="event-description">${event.description}</p>
          <blockquote class="event-quote">"${event.quote}"</blockquote>
          <p class="event-verse">${displayVerse(event.verse)}</p>
        </div>
      `;
    }).join('');
  }

  // Build navigable cities sorted by biblical order for this book
  if (activeBook !== 'all') {
    navigableCities = getBookOrderedCities(activeBook);
  } else {
    navigableCities = getFilteredCities();
  }
  navIndex = navigableCities.findIndex(c => c.id === city.id);
  if (navIndex < 0) navIndex = 0;
  updateNavCounter();

  sheet.classList.add('open');
  drawHighlight(city);
}

function closeBottomSheet() {
  document.getElementById('bottomSheet').classList.remove('open');
  selectedCity = null;
  highlightLayer.removeAll();
}

function drawHighlight(city) {
  highlightLayer.removeAll();
  highlightLayer.add(new Graphic({
    geometry: new Point({ longitude: city.lng, latitude: city.lat, spatialReference: { wkid: 4326 } }),
    symbol: new SimpleMarkerSymbol({
      color: [139, 105, 20, 0.15],
      size: 30,
      outline: { color: [139, 105, 20, 0.8], width: 3 },
      style: "circle"
    })
  }));
}

function updateNavCounter() {
  const counter = document.getElementById('navCounter');
  counter.textContent = `${navIndex + 1} / ${navigableCities.length}`;
  document.getElementById('prevStop').disabled = navIndex <= 0;
  document.getElementById('nextStop').disabled = navIndex >= navigableCities.length - 1;
  document.getElementById('firstStop').disabled = navIndex <= 0;
}

function navigateTo(index) {
  if (index < 0 || index >= navigableCities.length) return;
  navIndex = index;
  const city = navigableCities[navIndex];
  openBottomSheet(city);
  mapView.goTo({ center: [city.lng, city.lat], zoom: Math.max(mapView.zoom, 7) }, { duration: 400 });
}

// --- ZOOM HELPERS ---
function zoomToBook(bookId) {
  const bookCities = cities.filter(c => c.books.includes(bookId));
  if (bookCities.length === 0) return;
  if (bookCities.length === 1) {
    mapView.goTo({ center: [bookCities[0].lng, bookCities[0].lat], zoom: 8 }, { duration: 800 });
    return;
  }
  const points = bookCities.map(c => ({ type: "point", longitude: c.lng, latitude: c.lat }));
  mapView.goTo(points, { duration: 1000, easing: "ease-in-out" }).catch(() => {});
}

function zoomToCategory(category) {
  const catCities = cities.filter(c => c.books.some(bId => {
    const book = books.find(b => b.id === bId);
    return book && book.category === category;
  }));
  if (catCities.length > 1) {
    const points = catCities.map(c => ({ type: "point", longitude: c.lng, latitude: c.lat }));
    mapView.goTo(points, { duration: 800 }).catch(() => {});
  }
}

// --- SCRIPTURE PANEL (linked to active context) ---
function openScripturePanelForContext() {
  const panel = document.getElementById('scripturePanel');
  panel.classList.add('open');
  document.getElementById('scriptureSearch').value = '';
  renderScriptureList('');
}

function toggleScripturePanel() {
  const panel = document.getElementById('scripturePanel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    renderScriptureList('');
  }
}

function renderScriptureList(filter) {
  const body = document.getElementById('scripturePanelBody');
  const search = filter.toLowerCase();

  let chapters = allChapters;

  // Filter by active book
  if (activeBook !== 'all') {
    const book = books.find(b => b.id === activeBook);
    if (book) chapters = chapters.filter(c => c.bookName === book.name);
  }
  // Filter by active category
  else if (activeCategory !== 'all') {
    const categoryBooks = books.filter(b => b.category === activeCategory).map(b => b.name);
    chapters = chapters.filter(c => categoryBooks.includes(c.bookName));
  }

  if (search) {
    chapters = chapters.filter(c =>
      `${c.bookName} ${c.chapter}`.toLowerCase().includes(search)
    );
  }

  body.innerHTML = chapters.map(ch => {
    const book = books.find(b => b.name === ch.bookName);
    const color = book ? book.hexColor : '#C9A84C';
    const isActive = selectedChapter && selectedChapter.bookName === ch.bookName && selectedChapter.chapter === ch.chapter;
    return `
      <div class="chapter-entry ${isActive ? 'active' : ''}" data-book-name="${ch.bookName}" data-chapter="${ch.chapter}">
        <span><span class="chapter-dot" style="background:${color}"></span><span class="chapter-name">${displayVerse(ch.bookName)} ${ch.chapter}</span></span>
        <span class="event-count">${ch.eventCount}</span>
      </div>
    `;
  }).join('');

  body.querySelectorAll('.chapter-entry').forEach(entry => {
    entry.addEventListener('click', () => {
      const bookName = entry.getAttribute('data-book-name');
      const chapter = parseInt(entry.getAttribute('data-chapter'));

      if (selectedChapter && selectedChapter.bookName === bookName && selectedChapter.chapter === chapter) {
        // Deselect
        selectedChapter = null;
        closeBottomSheet();
      } else {
        // Select chapter
        selectedChapter = { bookName, chapter };

        // Find and open the first city that matches this chapter
        const matchingCities = cities.filter(c =>
          c.events.some(e => e.bookName === bookName && e.chapter === chapter)
        );
        if (matchingCities.length > 0) {
          const firstCity = matchingCities[0];
          // Close scripture panel to reveal the bottom sheet
          document.getElementById('scripturePanel').classList.remove('open');
          openBottomSheet(firstCity);
          mapView.goTo({ center: [firstCity.lng, firstCity.lat], zoom: Math.max(mapView.zoom, 7) }, { duration: 500 });
        }
      }

      refresh();
      renderScriptureList(document.getElementById('scriptureSearch').value);

      if (selectedChapter && !selectedCity) {
        const filteredCities = getFilteredCities();
        if (filteredCities.length > 0) {
          const points = filteredCities.map(c => ({ type: "point", longitude: c.lng, latitude: c.lat }));
          mapView.goTo(points, { duration: 600 }).catch(() => {});
        }
      }
    });
  });
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // City click
  mapView.on('click', async (event) => {
    const response = await mapView.hitTest(event, { include: [citiesLayer] });
    if (response.results.length > 0) {
      const graphic = response.results[0].graphic;
      const cityId = graphic.attributes?.cityId;
      const city = cities.find(c => c.id === cityId);
      if (city) {
        openBottomSheet(city);
        mapView.goTo({ center: [city.lng, city.lat], zoom: Math.max(mapView.zoom, 7) }, { duration: 500 });
      }
    } else {
      closeBottomSheet();
    }
  });

  // Sheet close
  document.getElementById('sheetClose').addEventListener('click', closeBottomSheet);

  // First / Prev / Next navigation
  document.getElementById('firstStop').addEventListener('click', () => navigateTo(0));
  document.getElementById('prevStop').addEventListener('click', () => navigateTo(navIndex - 1));
  document.getElementById('nextStop').addEventListener('click', () => navigateTo(navIndex + 1));

  // Category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      activeBook = 'all';
      selectedChapter = null;
      closeBottomSheet();
      generateBookChips();
      refresh();

      if (activeCategory !== 'all') {
        zoomToCategory(activeCategory);
        // Auto-open scripture panel linked to this category
        openScripturePanelForContext();
      } else {
        mapView.goTo({ center: [37, 32], zoom: 5 }, { duration: 800 });
        document.getElementById('scripturePanel').classList.remove('open');
      }
    });
  });

  // Scripture panel
  document.getElementById('btnScripture').addEventListener('click', toggleScripturePanel);
  document.getElementById('scripturePanelClose').addEventListener('click', () => {
    document.getElementById('scripturePanel').classList.remove('open');
  });
  document.getElementById('scriptureSearch').addEventListener('input', (e) => {
    renderScriptureList(e.target.value);
  });

  // Info modal
  document.getElementById('btnInfo').addEventListener('click', () => {
    document.getElementById('infoModal').classList.add('open');
  });
  document.getElementById('infoModalClose').addEventListener('click', () => {
    document.getElementById('infoModal').classList.remove('open');
  });
  document.getElementById('infoModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('infoModal')) {
      document.getElementById('infoModal').classList.remove('open');
    }
  });

  // Donate modal
  document.getElementById('btnDonate').addEventListener('click', () => {
    document.getElementById('donateOverlay').classList.add('open');
  });
  document.getElementById('closeDonate').addEventListener('click', () => {
    document.getElementById('donateOverlay').classList.remove('open');
  });
  document.getElementById('donateOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('donateOverlay')) {
      document.getElementById('donateOverlay').classList.remove('open');
    }
  });

  // Language toggle
  document.getElementById('btnLang').addEventListener('click', () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    setLang(newLang);
    applyTranslations();
    generateBookChips();
    refresh();
    if (selectedCity) openBottomSheet(selectedCity);
    if (document.getElementById('scripturePanel').classList.contains('open')) {
      renderScriptureList(document.getElementById('scriptureSearch').value);
    }
  });

  // Zoom change: toggle minor labels
  mapView.watch('zoom', () => {
    drawCities();
  });

  // Mobile: swipe to dismiss bottom sheet
  let touchStartY = 0;
  const sheet = document.getElementById('bottomSheet');
  sheet.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  });
  sheet.addEventListener('touchmove', (e) => {
    const diff = e.touches[0].clientY - touchStartY;
    if (diff > 100) closeBottomSheet();
  });
}

// --- LEGEND ---
function generateLegend() {
  const container = document.getElementById('legendItems');
  const categories = [
    { name: t('catLaw'), color: 'var(--cat-law)' },
    { name: t('catHistory'), color: 'var(--cat-history)' },
    { name: t('catWisdom'), color: 'var(--cat-wisdom)' },
    { name: t('catMajorProphets'), color: 'var(--cat-major-prophet)' },
    { name: t('catMinorProphets'), color: 'var(--cat-minor-prophet)' }
  ];
  container.innerHTML = categories.map(cat => `
    <div class="legend-item">
      <span class="legend-dot" style="background:${cat.color}"></span>
      <span class="legend-label">${cat.name}</span>
    </div>
  `).join('');
}
