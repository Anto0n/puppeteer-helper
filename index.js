class PuppeteerHelper {
  constructor (args) {
    const { browser } = args;

    this.browser = browser;
    this.page = undefined;
  }

  async visit (url) {
    this.page = await this.browser.newPage();
    await this.page.goto(url);
  }

  async close () {
    await this.browser.close();
  }

  async pageClose () {
    await this.page.close();
  }

  async getXPath (selector) {
    const elementHandle = await this.page.$x(selector);
    return elementHandle[0];
  }

  async getText (selector, property = PROPERTY.INNER_TEXT) {
    const text = await this.getElementProperty(selector, property);
    return text;
  }

  async getUrl (selector, property = PROPERTY.URL) {
    const url = await this.getElementProperty(selector, property);
    return url;
  }

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

  async click (selector) {
    const element = await this.getXPath(selector);
    await element.click();
  }

  async goBack () {
    await this.page.goBack();
  }

  async ifElementPresent (selector) {
    const element = await this.getXPath(selector);
    const isPresent = element !== undefined;
    return isPresent;
  }

  async waitForElementToLoad (selector, time = 10000) {
    await this.page.waitForXPath(selector, { timeout: time });
  }

  async waitForPageLoad (timeout = 10000) {
    await this.waitForElementToLoad('//body', timeout);
  }

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

  async delay (time = 10000) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  // Get array of elements out of elementHandle object
  async extractItems (selector) {
    const extractedElements = await this.page.$x(selector);
    const items = [];

    for (const element of extractedElements) {
      items.push(element);
    }
    return items;
  }
}
export default PuppeteerHelper;
