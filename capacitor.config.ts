import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.monkeyCoin.app',
  appName: 'monkeyCoin',
  webDir: 'dist',
  plugins: {
    Keyboard: {
      style: 'default',
      resizeOnFullScreen: true
    }
  },
};

export default config;
