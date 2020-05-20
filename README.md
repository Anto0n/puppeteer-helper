# Puppeteer helper

`Puppeteer helper` - the library of basic functions that will help you to start crawling with [Puppeteer](https://github.com/puppeteer/puppeteer) fast!

## Installation

1. Clone the project

	`git clone git@github.com:Anto0n/puppeteer-helper.git`

2. Install the dependencies

	`npm i`

##  Usage example

 ```
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
 ```

## Functions

<dl>
<dt><a href="#visit">visit()</a></dt>
<dd><p>Go to website URL</p>
</dd>
<dt><a href="#close">close()</a></dt>
<dd><p>Close the browser</p>
</dd>
<dt><a href="#pageClose">pageClose()</a></dt>
<dd><p>Close current page</p>
</dd>
<dt><a href="#getXPath">getXPath()</a></dt>
<dd><p>Get element by XPath provided</p>
</dd>
<dt><a href="#getText">getText()</a> ⇒ <code>string</code></dt>
<dd><p>Get inner text of the target element</p>
</dd>
<dt><a href="#getUrl">getUrl()</a> ⇒ <code>string</code></dt>
<dd><p>Get URL of the target element</p>
</dd>
<dt><a href="#getElementProperty">getElementProperty()</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#click">click()</a></dt>
<dd><p>Clicks on the element by XPath selector provided</p>
</dd>
<dt><a href="#goBack">goBack()</a></dt>
<dd><p>Returns to the previous page</p>
</dd>
<dt><a href="#ifElementPresent">ifElementPresent()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if element is present</p>
</dd>
<dt><a href="#waitForElementToLoad">waitForElementToLoad()</a></dt>
<dd><p>Checks if element is present</p>
</dd>
<dt><a href="#waitForPageLoad">waitForPageLoad()</a></dt>
<dd><p>Checks if page is loaded</p>
</dd>
<dt><a href="#scrollViewport">scrollViewport()</a></dt>
<dd><p>Scroll the page until element is present in the viewport</p>
</dd>
<dt><a href="#delay">delay()</a> ⇒ <code>Promise</code></dt>
<dd><p>Suspend for specified time</p>
</dd>
<dt><a href="#extractItems">extractItems()</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Get array of elements out of target element (elementHandle object)</p>
</dd>
</dl>

<a name="PROPERTY"></a>

## PROPERTY : <code>string</code>

The HTML element properties

**Kind**: global constant  
<a name="visit"></a>

## visit()

Go to website URL

**Kind**: global function  
**Properties**

| Name | Type                | Description           |
| ---- | ------------------- | --------------------- |
| url  | <code>string</code> | URL of target website |

<a name="close"></a>

## close()

Close the browser

**Kind**: global function  
<a name="pageClose"></a>

## pageClose()

Close current page

**Kind**: global function  
<a name="getXPath"></a>

## getXPath()

Get element by XPath provided

**Kind**: global function  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| selector | <code>string</code> | XPath selector of the target element |

<a name="getText"></a>

## getText() ⇒ <code>string</code>

Get inner text of the target element

**Kind**: global function  
**Returns**: <code>string</code> - - 'innerText' of the target element  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| selector | <code>string</code> | XPath selector of the target element |
| property | <code>string</code> | Get text property out of the element |

<a name="getUrl"></a>

## getUrl() ⇒ <code>string</code>

Get URL of the target element

**Kind**: global function  
**Returns**: <code>string</code> - - 'href' of the target element  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| selector | <code>string</code> | XPath selector of the target element |
| property | <code>string</code> | Get URL property out of the element  |

<a name="getElementProperty"></a>

## getElementProperty() ⇒ <code>string</code>

**Kind**: global function  
**Returns**: <code>string</code> - - property of the target element  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| selector | <code>string</code> | XPath selector of the target element |
| property | <code>string</code> | Get URL property out of the element  |
| index    | <code>number</code> | Index of item                        |

<a name="click"></a>

## click()

Clicks on the element by XPath selector provided

**Kind**: global function  
**Properties**

| Name     | Type                | Description                                   |
| -------- | ------------------- | --------------------------------------------- |
| selector | <code>string</code> | XPath selector of the target element to click |

<a name="goBack"></a>

## goBack()

Returns to the previous page

**Kind**: global function  
<a name="ifElementPresent"></a>

## ifElementPresent() ⇒ <code>Boolean</code>

Checks if element is present

**Kind**: global function  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| selector | <code>string</code> | XPath selector of the target element |

<a name="waitForElementToLoad"></a>

## waitForElementToLoad()

Checks if element is present

**Kind**: global function  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| selector | <code>string</code> | XPath selector of the target element |
| time     | <code>number</code> | time to wait until element is loaded |

<a name="waitForPageLoad"></a>

## waitForPageLoad()

Checks if page is loaded

**Kind**: global function  
**Properties**

| Name    | Type                | Description                       |
| ------- | ------------------- | --------------------------------- |
| timeout | <code>number</code> | time to wait until page is loaded |

<a name="scrollViewport"></a>

## scrollViewport()

Scroll the page until element is present in the viewport

**Kind**: global function  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| selector | <code>string</code> | XPath selector of the target element |

<a name="delay"></a>

## delay() ⇒ <code>Promise</code>

Suspend for specified time

**Kind**: global function  
**Properties**

| Name | Type                | Description     |
| ---- | ------------------- | --------------- |
| time | <code>string</code> | time to suspend |

<a name="extractItems"></a>

## extractItems() ⇒ <code>Array.&lt;Object&gt;</code>

Get array of elements out of target element (elementHandle object)

**Kind**: global function  
**Properties**

| Name     | Type                | Description     |
| -------- | ------------------- | --------------- |
| selector | <code>string</code> | time to suspend |
