import {test,chromium,webkit,Browser,Page}  from '@playwright/test';
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



   await edgepage.waitForTimeout(2000);
   await edgeBrowser.close();
   await webkitBrowser.close();
});