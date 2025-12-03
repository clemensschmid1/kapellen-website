# Kapelle Mariä Opferung - Bad Waldsee Osterhofen

Eine moderne, responsive Website für die Kapelle Mariä Opferung in Bad Waldsee - Osterhofen.

## Über die Website

Diese Website präsentiert die reiche Geschichte, Kunst und Spiritualität der Kapelle Mariä Opferung. Sie umfasst detaillierte Informationen über:

- Die Geschichte der Kapelle
- Den Chorraum mit den Sieben Schmerzen Mariens
- Den prächtigen Hochaltar mit Pietà, Heiligem Josef und Johannes dem Täufer
- Die Deckengemälde im Schiff mit dem glorreichen Rosenkranz
- Die vier Evangelisten
- Die Heiligenfiguren (Florian, Rochus, Sebastian, Maria)
- Die Votivtafeln der Marianischen Bruderschaften
- Weitere Kunstwerke und Details

## Technische Details

### Struktur
- **index.html** - Haupt-HTML-Datei mit allen Inhalten
- **styles.css** - Umfassende CSS-Styles für modernes, responsives Design
- **script.js** - JavaScript für Interaktivität und Navigation

### Features

- ✅ **Professionelles Design** - Hochwertige Typografie, Spacing und Farbpalette
- ✅ **Vollständig responsive** - Optimiert für alle Geräte (Mobile, Tablet, Desktop)
- ✅ **Moderne UI/UX** - Elegante Animationen und Micro-Interactions
- ✅ **Smooth Scrolling Navigation** - Flüssige Navigation mit aktiver Sektion-Hervorhebung
- ✅ **Mobile Navigation** - Hamburger-Menü für mobile Geräte
- ✅ **Scroll-Animationen** - Professionelle Fade-in und Slide-Effekte
- ✅ **PWA-ready** - Service Worker und Manifest für Offline-Funktionalität
- ✅ **SEO-optimiert** - Meta-Tags, Open Graph, Structured Data
- ✅ **Accessibility** - Keyboard-Navigation, Focus-Styles, ARIA-Labels
- ✅ **Performance** - Optimiert mit Debounced Events, Lazy Loading
- ✅ **Vercel-ready** - Konfiguriert für einfaches Deployment

### Design

Das professionelle Design verwendet:
- **Verfeinerte Farbpalette** - Professionelle Braun- und Goldtöne mit subtilen Gradients
- **Premium Typografie** - Cormorant Garamond (Serif) für Überschriften, Inter (Sans-Serif) für Text
- **Professionelle Schatten** - Mehrschichtige Schatten für Tiefe und Dimension
- **Elegante Animationen** - Cubic-bezier Transitions für natürliche Bewegungen
- **Card-basierte Layouts** - Moderne Cards mit Hover-Effekten und Micro-Interactions
- **Goldene Akzente** - Subtile goldene Highlights für religiöse Elemente
- **Optimiertes Spacing** - Konsistente Abstände mit CSS Custom Properties

### Browser-Kompatibilität

Die Website ist kompatibel mit:
- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)
- Mobile Browser (iOS Safari, Chrome Mobile)

## Installation und Verwendung

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install
```

### Entwicklung

```bash
# Entwicklungsserver starten (öffnet automatisch im Browser)
npm run dev
```

Der Entwicklungsserver läuft auf `http://localhost:3000` und aktualisiert sich automatisch bei Änderungen.

### Build für Produktion

```bash
# Produktions-Build erstellen
npm run build

# Build-Vorschau ansehen
npm run preview
```

Die gebauten Dateien befinden sich im `dist/` Ordner.

### Code-Qualität

```bash
# Code formatieren
npm run format

# Linting (wenn konfiguriert)
npm run lint
```

## Inhalt

Die Website ist in folgende Hauptsektionen unterteilt:

1. **Start** - Hero-Bereich mit Einführung
2. **Geschichte** - Informationen zur Kapelle und ihrer Bedeutung
3. **Chor** - Detaillierte Beschreibung der Sieben Schmerzen Mariens und Deckengemälde
4. **Hochaltar** - Beschreibung des Altars, der Pietà und flankierenden Statuen
5. **Schiff** - Deckengemälde mit glorreichem Rosenkranz und Evangelisten
6. **Heilige** - Informationen zu den Heiligenfiguren in der Kapelle
7. **Votivtafeln** - Die Votivtafeln der beiden Marianischen Bruderschaften

## Deployment

### Vercel Deployment

Die Website ist vollständig für Vercel konfiguriert. Siehe `DEPLOY.md` für detaillierte Anweisungen.

**Schnellstart:**
1. Code zu GitHub pushen
2. Auf [vercel.com](https://vercel.com) einloggen
3. Repository importieren
4. Automatisches Deployment!

Die `vercel.json` enthält bereits:
- Build-Konfiguration
- SPA Routing
- Security Headers
- Cache-Control

## Anpassungen

### Farben ändern

Die professionelle Farbpalette ist in `styles.css` als CSS-Variablen definiert:

```css
:root {
    --primary-color: #7A3E1A;
    --primary-dark: #5A2E14;
    --gold: #D4AF37;
    --gold-dark: #B8941F;
    /* ... weitere professionelle Farben */
}
```

### Inhalte bearbeiten

Alle Inhalte befinden sich in `index.html`. Die Struktur ist klar organisiert und einfach zu bearbeiten.

### Styling anpassen

Alle Styles befinden sich in `styles.css`. Das Design verwendet ein modulares System mit wiederverwendbaren Komponenten.

## Quellen

Die Heiligenbeschreibungen basieren auf:
- Dammer, Inga und Adam, Birgit: Das große Heiligenlexikon. Patronate, Gedenktage, Leben und Wirken von mehr als 500 Heiligen, Seehammer Verlag, o. J.

## Lizenz

Diese Website wurde für die Kapelle Mariä Opferung in Bad Waldsee - Osterhofen erstellt.

## Kontakt

Für Fragen oder Anmerkungen zur Website wenden Sie sich bitte an die Mesnerin Frau Doris Waibel.

---

**Erstellt mit ❤️ für die Kapelle Mariä Opferung**

