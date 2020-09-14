const puppeteer = require('puppeteer')
;(async () => {
  //console.log('Hello')
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  })

  const context = await browser.createIncognitoBrowserContext()
  // const page = await browser.newPage()
  const page = await context.newPage()

  const browserSession = browser.wsEndpoint()

  // puppeteer disconnected from chrome
  browser.disconnect()

  const browser2 = await puppeteer.connect({
    browserWSEndpoint: browserSession
  })
  const page2 = await browser2.newPage()

  await page2.goto('https://demosite.executeautomation.com/')
  await page2.type('[name=UserName', 'executeautomation')

  await browser.close()
})()
