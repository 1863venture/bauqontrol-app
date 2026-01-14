# BauQontrol – Android App (Capacitor Wrapper)

Dieses Projekt erzeugt eine Android-App (WebView), die eure bestehende Web-App lädt:

- Start-URL: `https://bauqontrol.com/login.php`

> **Hinweis:** PHP läuft weiterhin auf eurem Server. Die App ist eine Hülle, die die Website anzeigt und (optional) native Funktionen bereitstellt.

## Voraussetzungen (auf eurem Rechner)

1. **Node.js LTS** (inkl. npm)
2. **Android Studio** (inkl. Android SDK)
3. (empfohlen) **Git**

## Setup

Im Projektordner:

```bash
npm install
```

## Android Plattform erzeugen

```bash
npx cap add android
```

Wenn ihr nachträglich etwas an `www/` oder an Plugins geändert habt:

```bash
npx cap sync android
```

## In Android Studio öffnen

```bash
npx cap open android
```

Dann in Android Studio: **Run ▶️** (Emulator oder echtes Gerät).

## Kamera Plugin (vorbereitet)

Das Projekt enthält bereits die Dependency `@capacitor/camera`. Um die Kamera wirklich zu nutzen, müsst ihr den Aufruf in euer Web-Frontend integrieren (JavaScript) und anschließend syncen:

```bash
npx cap sync android
```

## Eure PHP Quellen

Die hochgeladene ZIP wurde zu Referenzzwecken nach `php_source/` entpackt.
