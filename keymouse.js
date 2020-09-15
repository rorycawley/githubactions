const puppeteer = require('puppeteer')
;(async () => {
  //console.log('Hello')
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  })

  const page = await browser.newPage()
  await page.setViewport({
    width: 1440,
    height: 1000
  })
  // login
  await page.goto('https://demosite.executeautomation.com/')
  await page.type('[name=UserName', 'executeautomation')
  await page.type('[name=Password', 'admin')
  await page.keyboard.press('Enter', { delay: 2000 })

  // hover over menu
  await page.hover("[id='Automation Tools']")
  await browser.close()
})()
