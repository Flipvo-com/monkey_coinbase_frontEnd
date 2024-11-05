import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.monkeyTrad.app',
  appName: 'monkeyTrad',
  webDir: 'dist',
  plugins: {
    Keyboard: {
      style: 'default',
      resizeOnFullScreen: true
    }
  },
};

export default config;
