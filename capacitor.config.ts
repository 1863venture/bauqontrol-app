import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bauqontrol.app',
  appName: 'BauQontrol',
  webDir: 'www',
  server: {
    // Live-URL mode: the app redirects to your hosted PHP app.
    allowNavigation: ['bauqontrol.com', '*.bauqontrol.com'],
    androidScheme: 'https'
  }
};

export default config;
