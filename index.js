const webdriver = require('selenium-webdriver') 
const chrome = require('selenium-webdriver/chrome') 
const chromium = require('chromium') 
const fs = require('fs') 
const path = require('path') 
const cmd = require('node-cmd')
require('chromedriver') 

const VideoCapture = {

  test() {
    console.log('Process enviroment', process.env.FILE)
  },

  async startChromium() {
    let options = new chrome.Options() 
    options.setChromeBinaryPath(chromium.path) 
    options.addArguments('--headless') 
    options.addArguments('--disable-gpu') 
    options.addArguments('--window-size=375,667') 

    const driver = await new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build() 

    await driver.get(process.env.FILE) 
    console.log('Hello Google!')
    function script (arguments) {
      console.log(11111, arguments)
      return arguments.cmd.get
      // return arguments.get('ffmpeg -f avfoundation -list_devices true -i ""', function(err, data, stderr){
      //   if (err) {
      //     console.log('error get command', err)
      //     return
      //   }
      //   console.log('the current working dir is : ',data)
      // })
    }
    let test = await driver.executeScript(script, {cmd})
    console.log(222222, test)

    await this.takeScreenshot(driver, path.resolve(__dirname, 'images', 'test.png'))
    // this.quitChromium(driver)

  },

  async takeScreenshot(driver, name) {
    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync(name, data, 'base64') 
      console.log('Screenshot is saved') 
    }) 
  },

  async quitChromium(driver) {
    await driver.quit()
  }
}


VideoCapture.startChromium()

module.exports = VideoCapture