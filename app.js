import PuppeteerHelper from './index';
import puppeteer from 'puppeteer';

// sample of config
const defaultLaunchOptions = {
  headless: false,

  // most common display resolution
  defaultViewport: {
    width: 1280,
    height: 1024,
  },

  args: [
    '--window-size=1280,984', // 40 (default windows taskbar height)
  ],
};

const run = async () => {
  const browser = await puppeteer.launch(defaultLaunchOptions);
  const puppeteerHelper = new PuppeteerHelper({ browser });
  await puppeteerHelper.visit('https://google.com');
  await puppeteerHelper.delay(5000);
  await puppeteerHelper.close();
}

run();
