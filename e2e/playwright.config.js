import { chromium, firefox, webkit, devices } from 'playwright';

const iPhone = devices['iPhone 6'];

module.exports = {
    browserType: chromium,
    launchConfig: {
        headless: true,
        slowMo: 10
    },
    contextConfig: {
        viewport: iPhone.viewport,
        userAgent: iPhone.userAgent
    }
};
