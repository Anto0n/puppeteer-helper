const puppeteer = require('puppeteer');
import PuppeteerHelper from '../index';

const defaultLaunchOptions = {
  headless: false,

  // most common display resolution
  defaultViewport: {
    width: 1366,
    height: 768,
  },

  args: [
    '--window-size=1366,728', // 768 - 40 (default windows taskbar height)
  ],

  pipe: true, // connect to browser via pipes instead of WebSockets, https://stackoverflow.com/questions/54922756/what-are-the-advantages-and-disadvantages-of-connecting-puppeteer-over-pipe-inst
};

jest.mock('../index');

  beforeEach(() => {
    PuppeteerHelper.mockClear();
  });

  it('We should be able to call new() on PuppeteerHelper', () => {
    const puppeteerHelper = new PuppeteerHelper();
    // Ensure constructor created the object:
    expect(puppeteerHelper).toBeTruthy();
  });

  it('We can check if the helper called the class constructor', () => {
    const puppeteerHelper = new PuppeteerHelper();
    expect(PuppeteerHelper).toHaveBeenCalledTimes(1);
  });
