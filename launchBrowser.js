import puppeteer from 'puppeteer-extra';
import pluginStealth from 'puppeteer-extra-plugin-stealth';

//
// TL:DR; Workaround for 'puppeteer-extra-plugin-stealth'
//
// Details
// 1. 'plugin-stealth' configures a lot of parameters to help avoid bot detection
// 2. It always sets windows-like `navigator.userAgent` despite of platform
// 3. It doesn't sets `navigator.platform` that reveal OS platform (i.e. 'Linux x86_64', 'MacIntel')
// 4. Some anti-bot scripts simply reveal fake by comparing browser `navigator.userAgent` with `navigator.platform` and other parameters
// 5. To be sure about passing bot detection
//   a. `navigator.userAgent` value must always correspond to the real platform
//   b. User agent should be set not per page but browser-wide
const { platform, arch } = process;
const bits = arch === 'x64' ? 64 : 32;
const chromeVersion = '78.0.3904.108';

let userAgent;

switch (platform) {
  case 'win32':
    userAgent = `Mozilla/5.0 (Windows NT 10.0; Win${bits}; x${bits}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
    break;

  case 'linux':
    userAgent = `Mozilla/5.0 (X11; Linux ${bits === 64 ? 'x86_64' : 'i686'}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
    break;

  case 'darwin':
    userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
    break;

  default:
    throw new Error(`Platform "${platform}" (${bits} bits) is not supported`);
}

const defaultLaunchOptions = {
  headless: true,

  // most common display resolution
  defaultViewport: {
    width: 1366,
    height: 768,
  },

  args: [
    '--window-size=1366,728', // 768 - 40 (default windows taskbar height)
    `--user-agent=${userAgent}`, // set useragent for whole browser, https://github.com/puppeteer/puppeteer/issues/5061
  ],

  pipe: true, // connect to browser via pipes instead of WebSockets, https://stackoverflow.com/questions/54922756/what-are-the-advantages-and-disadvantages-of-connecting-puppeteer-over-pipe-inst
};

puppeteer.use(pluginStealth());

function launchBrowser (launchOptions = {}) {
  return puppeteer.launch({ ...defaultLaunchOptions, ...launchOptions });
}

export default launchBrowser;
