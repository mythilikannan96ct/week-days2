import {test} from "@playwright/test"
test("Create Lead", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator("#username").fill("demoCSR2")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()

    await page.locator('(//input[@name="companyName"])[2]').fill("Testleaf")
    
    await page.locator('(//input[@name="firstName"])[3]').fill("mythili")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("kannan")
    await page.locator("#createLeadForm_personalTitle").fill("Ms.")
    await page.locator("#createLeadForm_generalProfTitle").fill(" Engineer")
    await page.locator("#createLeadForm_annualRevenue").fill("500000")
    await page.locator("#createLeadForm_departmentName").fill("Testing")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("123456789")
    await page.locator('input[value="Create Lead"]').click()


    
    

})
