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
    '--window-size=1280,1080', // 40 (default windows taskbar height)
  ],

  pipe: true, // connect to browser via pipes instead of WebSockets, https://stackoverflow.com/questions/54922756/what-are-the-advantages-and-disadvantages-of-connecting-puppeteer-over-pipe-inst
};

const run = async () => {
  const browser = await puppeteer.launch(defaultLaunchOptions);
  const puppeteerHelper = new PuppeteerHelper({ browser });
  await puppeteerHelper.visit('https://google.com');
  await puppeteerHelper.delay(5000);
  await puppeteerHelper.close();
}

run();
