import {test,expect} from "@playwright/test"
test("edit lead using pure xpath",async({page}) =>{
     test.setTimeout(100000)
  await page.goto("https://leaftaps.com/opentaps/control/main")
  await page.locator('//input[@id="username"]').fill("demoCSR2")
  await page.locator('//input[@id="password"]').fill("crmsfa")
  await page.locator('.decorativeSubmit').click()
  await page.locator('//a[contains(text(),"CRM")]').click()
  await page.locator('//a[text()="Leads"]').click()
  await page.locator('//a[text()="Create Lead"]').click()
   
  await page.locator('(//input[@name="companyName"])[2]').fill("Testleaf")
    
  await page.locator('(//input[@name="firstName"])[3]').fill("mythili")
  await page.locator('//input[@id="createLeadForm_lastName"]').fill("kannan")
  await page.locator('//input[@name="submitButton"]').click()
  await page.locator('//a[text()="Edit"]').click()
  await page.waitForLoadState('load')
  await page.locator('#updateLeadForm_companyName').clear()
  await page.locator('#updateLeadForm_companyName').fill("TESTLEAF company")
  await page.locator('//input[@value="Update"]').click()



})
