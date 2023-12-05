const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('loginexitoso', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('loginexitoso', async function() {
    await driver.get("https://www.saucedemo.com/")
    await driver.manage().window().setRect(1057, 664)
    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    await driver.findElement(By.id("login_credentials")).click()
    await driver.findElement(By.id("login_credentials")).click()
    {
      const element = await driver.findElement(By.id("login_credentials"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("login_credentials")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys("standard_user")
    await driver.findElement(By.css(".login_password")).click()
    await driver.findElement(By.css(".login_password")).click()
    {
      const element = await driver.findElement(By.css(".login_password"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.css("*[data-test=\"password\"]")).click()
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("secret_sauce")
    await driver.findElement(By.css("*[data-test=\"login-button\"]")).click()
    await driver.findElement(By.css(".title")).click()
    await driver.findElement(By.css(".title")).click()
    {
      const element = await driver.findElement(By.css(".title"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    assert(await driver.findElement(By.css(".title")).getText() == "Products")
  })
})
