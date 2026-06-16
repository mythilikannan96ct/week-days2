import {test,chromium,webkit, firefox,Browser,Page}  from '@playwright/test';
test('Launch to Browser',async ()=>{
   //Edge browser instance
   const edgeBrowser:Browser= await chromium.launch({
     channel:'msedge',
     headless:false
    });
   const edgepage:Page = await edgeBrowser.newPage();
   await edgepage.goto('https://www.redbus.in');

   console.log("RedBus title:", await edgepage.title());
   console.log("RedBus URL:",edgepage.url());

   //Webkit Browser instance
   const webkitBrowser: Browser= await webkit.launch({
      headless: false

   });
   const webkitPage: Page= await webkitBrowser.newPage();
   await webkitPage. goto('https://www.flipkart.com');

   
   console.log("flipkart title:", await webkitPage.title());
   console.log("flipkart URL:",webkitPage.url());

   //firefox Browser instance

   const firefoxBrowser: Browser= await firefox.launch({
     headless: false

   });
   const firefoxPage: Page= await firefoxBrowser.newPage();
   await firefoxPage.goto('https://www.amazon.in/');


   console.log("amazon title:", await firefoxPage.title());
   console.log("amazon URL:", firefoxPage.url());



   await edgepage.waitForTimeout(3000);
   await edgeBrowser.close();
   await webkitBrowser.close();
   await firefoxBrowser.close();
});