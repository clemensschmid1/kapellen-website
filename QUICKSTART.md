# Quick Start Guide

## Schnellstart

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Browser öffnet sich automatisch auf `http://localhost:3000`**

## Verfügbare Befehle

- `npm run dev` - Startet den Entwicklungsserver mit Hot Reload
- `npm run build` - Erstellt einen Produktions-Build im `dist/` Ordner
- `npm run preview` - Zeigt eine Vorschau des Produktions-Builds
- `npm run format` - Formatiert den Code mit Prettier

## Projektstruktur

```
.
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Alle Styles
├── script.js           # JavaScript-Funktionalität
├── package.json        # npm Konfiguration
├── vite.config.js      # Vite Konfiguration
├── public/             # Statische Assets
│   ├── favicon.svg     # Favicon
│   ├── manifest.json   # PWA Manifest
│   ├── sw.js           # Service Worker
│   └── assets/         # Bilder und andere Assets
└── dist/               # Build-Output (wird generiert)
```

## Nächste Schritte

1. Fügen Sie Bilder in `public/assets/images/` hinzu
2. Aktualisieren Sie die Bild-Referenzen im HTML
3. Passen Sie Inhalte und Styling nach Bedarf an
4. Testen Sie die Website auf verschiedenen Geräten

## Tipps

- Der Entwicklungsserver unterstützt Hot Module Replacement (HMR)
- Änderungen werden automatisch im Browser aktualisiert
- Für Produktion: `npm run build` und dann den `dist/` Ordner deployen

