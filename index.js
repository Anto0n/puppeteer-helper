/**
 * @fileOverview Puppeteer helper class that includes all the basic functions which helps to start crawling fast
 * @author Anton Pasichnyk
 */

/**
 * The HTML element properties
 * @constant
 *
 * @type {string}
 */
const PROPERTY = {
  INNER_TEXT: 'innerText',
  CURRENT_SRC: 'currentSrc',
  TEXT_CONTENT: 'textContent',
  URL: 'href',
};

/**
 * Puppeteer helper class - helps to start crawling fast
 * @class
 * @requires PUPPETEER: instance of browser
 * @constructor
 * @param {object} browser - The instance of browser
 */
export default class PuppeteerHelper {
  constructor (args) {
    const { browser } = args;

    this.browser = browser;
    this.page = undefined;
  }

  /**
   * @description Go to website URL
   *
   * @property {string} url - URL of target website
   */
  async visit (url) {
    this.page = await this.browser.newPage();
    await this.page.goto(url);
  }

  /**
   * @description Close the browser
   */
  async close () {
    await this.browser.close();
  }

  /**
   * @description Close current page
   */
  async pageClose () {
    await this.page.close();
  }

  /**
   * @description Get element by XPath provided
   *
   * @property {string} selector - XPath selector of the target element
   */
  async getXPath (selector) {
    const elementHandle = await this.page.$x(selector);

    return elementHandle[0];
  }

  /**
   * @description Get inner text of the target element
   *
   * @property {string} selector - XPath selector of the target element
   * @property {string} property - Get text property out of the element
   *
   * @returns {string} - 'innerText' of the target element
   */
  async getText (selector, property = PROPERTY.INNER_TEXT) {
    const text = await this.getElementProperty(selector, property);

    return text;
  }

  /**
   * @description Get URL of the target element
   *
   * @property {string} selector - XPath selector of the target element
   * @property {string} property - Get URL property out of the element
   *
   * @returns {string} - 'href' of the target element
   */
  async getUrl (selector, property = PROPERTY.URL) {
    const url = await this.getElementProperty(selector, property);

    return url;
  }

  /**
   * @property {string} selector - XPath selector of the target element
   * @property {string} property - Get URL property out of the element
   * @property {number} index - Index of item
   *
   * @returns {string} - property of the target element
   */
  async getElementProperty (selector, property, index = 0) {
    const searchItem = await this.extractItems(selector);
    const item = searchItem[index];

    if (item === undefined) {
      const yellowColor = '\x1b[33m%s\x1b[0m';
      console.log(yellowColor, ` Selector bad or absent: ${selector}`);
      return undefined;
    }

    const propertyItem = await item.getProperty(property);
    const value = await propertyItem.jsonValue();

    return value;
  }

  /**
   * @description Clicks on the element by XPath selector provided
   *
   * @property {string} selector - XPath selector of the target element to click
   */
  async click (selector) {
    const element = await this.getXPath(selector);
    await element.click();
  }

  /**
   * @description Returns to the previous page
   */
  async goBack () {
    await this.page.goBack();
  }

  /**
   * @description Checks if element is present
   *
   * @property {string} selector - XPath selector of the target element
   *
   * @returns {Boolean}
   */
  async ifElementPresent (selector) {
    const element = await this.getXPath(selector);
    const isPresent = element !== undefined;

    return isPresent;
  }

  /**
   * @description Checks if element is present
   *
   * @property {string} selector - XPath selector of the target element
   * @property {number} time - time to wait until element is loaded
   */
  async waitForElementToLoad (selector, time = 10000) {
    await this.page.waitForXPath(selector, { timeout: time });
  }

  /**
   * @description Checks if page is loaded
   *
   * @property {number} timeout - time to wait until page is loaded
   */
  async waitForPageLoad (timeout = 10000) {
    await this.waitForElementToLoad('//body', timeout);
  }

  /**
   * @description Scroll the page until element is present in the viewport
   *
   * @property {string} selector - XPath selector of the target element
   */
  async scrollViewport (selector) {
    let isInViewport = false;

    while (!isInViewport) {
      await this.page.evaluate(() => {
        window.scrollBy(0, 10);
      });

      const isPresent = await this.ifElementPresent(selector);

      if (isPresent) isInViewport = await this.page.waitForXPath(selector);
    }
  }

  /**
   * @description Suspend for specified time
   *
   * @property {string} time - time to suspend
   *
   * @returns {Promise}
   */
  async delay (time = 10000) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  /**
   * @description Get array of elements out of target element (elementHandle object)
   *
   * @property {string} selector - time to suspend
   *
   * @returns {Object[]}
   */
  async extractItems (selector) {
    const extractedElements = await this.page.$x(selector);
    const items = [];

    for (const element of extractedElements) {
      items.push(element);
    }
    return items;
  }
}
