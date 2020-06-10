# Puppeteer helper

`Puppeteer helper` - the library of basic functions that will help you to start crawling with [Puppeteer](https://github.com/puppeteer/puppeteer) fast!

## Installation

1. Clone the project

   `git clone git@github.com:Anto0n/puppeteer-helper.git`

2. Install the dependencies

   `npm i`

## Usage example

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
     '--window-size=1280,984',
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
```

## Functions

| Title                   | Description                                                |
|-------------------------|-------------------------------------------------------------------------------------|
| [click](#click)                               | Click on the element by XPath provided                             |
| [close](#close)                               | Close the browser                                                  |
| [delay](#delay)                               | Suspend for specified `time in milliseconds`                       |
| [extractItems](#extractItems)                 | Get array of elements out of target element (elementHandle object) |
| [getElementProperty](#getElementProperty)     | Get the property of html element by property name provided         |
| [getUrl](#getUrl)                             | Get URL of the target element                                      |
| [getText](#getText)                           | Get inner text of the target element                               |
| [getXPath](#getXPath)                         | Get element by XPath provided                                      |
| [goBack](#goBack)                             | Return to the previous the page                                    |
| [ifElementPresent](#ifElementPresent)         | check if element is present on the page                            |
| [pageClose](#pageClose)                       | Close current page                                                 |
| [scrollViewport](scrollViewport)              | Scroll the page until element is present in the viewport           |
| [visit](#visit)                               | Go to website URL                                                  |
| [waitForElementToLoad](#waitForElementToLoad) | Checks if element is loaded                                        |
| [waitForPageLoad](#waitForPageLoad)           | Checks if page is loaded                                           |


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
