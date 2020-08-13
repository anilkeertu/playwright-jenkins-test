import { browserType, launchConfig, contextConfig } from '../playwright.config'

const rootSelector = '#root';
let browser, context, page;

export const root = async () => await page.$(rootSelector);

export const load = async () => {
    browser = await browserType.launch(launchConfig);
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.google.com');
};

export const close = async () => await browser.close();

export const getTitle = async () => await page.title();
