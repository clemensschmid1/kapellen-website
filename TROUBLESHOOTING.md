# Troubleshooting Guide

## Problem: localhost läuft nicht richtig

### Lösung 1: Port bereits belegt
```bash
# Prüfen, ob Port 3000 belegt ist
netstat -ano | findstr :3000

# Falls belegt, ändern Sie den Port in vite.config.js
```

### Lösung 2: Node Modules neu installieren
```bash
# Lösche node_modules und package-lock.json
rm -rf node_modules package-lock.json

# Neu installieren
npm install
```

### Lösung 3: Cache löschen
```bash
# Vite Cache löschen
rm -rf node_modules/.vite
```

### Lösung 4: Anderen Port verwenden
```bash
# Starten Sie mit einem anderen Port
npm run dev -- --port 3001
```

### Lösung 5: Prüfen Sie die Browser-Konsole
- Öffnen Sie die Entwicklertools (F12)
- Prüfen Sie die Console auf Fehler
- Prüfen Sie das Network-Tab auf fehlende Dateien

## Häufige Probleme

### Problem: CSS wird nicht geladen
**Lösung:** Stellen Sie sicher, dass `styles.css` im Root-Verzeichnis liegt und der Pfad in `index.html` korrekt ist: `/styles.css`

### Problem: JavaScript-Fehler
**Lösung:** Prüfen Sie die Browser-Konsole. Stellen Sie sicher, dass `script.js` im Root-Verzeichnis liegt.

### Problem: Bilder werden nicht angezeigt
**Lösung:** Bilder müssen im `public/` Ordner liegen. Referenzieren Sie sie mit `/assets/images/dateiname.jpg`

### Problem: 404 Fehler für Assets
**Lösung:** 
- Stellen Sie sicher, dass der `public/` Ordner existiert
- Prüfen Sie die Pfade (sollten mit `/` beginnen)
- Vite serviert den `public/` Ordner automatisch

## Debugging

### Vite Logs prüfen
```bash
# Starten Sie mit verbose Logging
npm run dev -- --debug
```

### Build testen
```bash
# Testen Sie den Build
npm run build
npm run preview
```

## Kontakt

Bei weiteren Problemen:
1. Prüfen Sie die Browser-Konsole
2. Prüfen Sie die Terminal-Ausgabe
3. Stellen Sie sicher, dass alle Dependencies installiert sind

