# Deployment auf Vercel

## Vorbereitung

1. **Git Repository erstellen** (falls noch nicht vorhanden):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **GitHub Repository erstellen** und Code pushen:
   ```bash
   git remote add origin https://github.com/yourusername/kapelle-osterhofen.git
   git push -u origin main
   ```

## Deployment auf Vercel

### Option 1: Via Vercel CLI

1. **Vercel CLI installieren**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Production Deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Via Vercel Dashboard

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Melden Sie sich an oder erstellen Sie ein Konto
3. Klicken Sie auf "New Project"
4. Importieren Sie Ihr GitHub Repository
5. Vercel erkennt automatisch die Vite-Konfiguration
6. Klicken Sie auf "Deploy"

## Konfiguration

Die `vercel.json` Datei ist bereits konfiguriert mit:
- ✅ Automatischem Build-Command
- ✅ Output Directory (dist)
- ✅ SPA Routing (Rewrites)
- ✅ Security Headers
- ✅ Cache-Control für Assets

## Environment Variables

Falls benötigt, können Sie in Vercel Environment Variables setzen:
1. Gehen Sie zu Project Settings
2. Klicken Sie auf "Environment Variables"
3. Fügen Sie Variablen hinzu

## Custom Domain

1. Gehen Sie zu Project Settings
2. Klicken Sie auf "Domains"
3. Fügen Sie Ihre Domain hinzu
4. Folgen Sie den DNS-Anweisungen

## Automatische Deployments

Nach dem ersten Deployment:
- ✅ Jeder Push zu `main` branch = Production Deployment
- ✅ Jeder Push zu anderen Branches = Preview Deployment
- ✅ Pull Requests = Preview Deployment mit Kommentaren

## Performance

Vercel optimiert automatisch:
- ✅ Edge Network (CDN)
- ✅ Automatic HTTPS
- ✅ Image Optimization
- ✅ Compression
- ✅ Caching

## Monitoring

- Vercel Analytics (optional aktivieren)
- Real-time Logs im Dashboard
- Performance Metrics

## Troubleshooting

### Build Fehler
- Prüfen Sie die Build-Logs im Vercel Dashboard
- Testen Sie lokal: `npm run build`

### Routing Probleme
- Die `vercel.json` enthält bereits SPA Rewrites
- Falls Probleme: Prüfen Sie die Rewrite-Regeln

### Asset Loading
- Stellen Sie sicher, dass Assets im `public/` Ordner sind
- Prüfen Sie die Pfade (sollten mit `/` beginnen)

## Nächste Schritte

Nach dem Deployment:
1. ✅ Testen Sie die Website
2. ✅ Prüfen Sie die Performance
3. ✅ Setzen Sie eine Custom Domain (optional)
4. ✅ Aktivieren Sie Analytics (optional)

