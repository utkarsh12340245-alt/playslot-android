import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.playslot.app',
  appName: 'PlaySlot',
  webDir: 'www',
  server: {
    url: 'https://playslot-br1ahi.v2.appdeploy.ai/',
    cleartext: false,
    allowNavigation: ['playslot-br1ahi.v2.appdeploy.ai']
  }
};

export default config;
