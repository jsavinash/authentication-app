import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run frontend-dashboard:start' },
      ciWebServerCommand: 'nx run frontend-dashboard:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
