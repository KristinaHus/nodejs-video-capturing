const chromeLauncher = require('chrome-launcher');

setTimeout(() => {
    // let launcher = new chromeLauncher.default()
    // console.log(33333333, launcher)
    // const flags = chromeLauncher.default()

    let chromeVal = null

    if (chromeVal) {
        chromeVal.kill()
        chromeVal = null
    } else {
        chromeLauncher.launch({
            startingUrl: 'https://amp.test.cutnut.tv/amp/7135d939-0f80-4e8c-b1fe-aea9af3117db.html',
            chromeFlags: [
                '--disable-gpu',
                '--kiosk', 
                '--incognito'
            ]
            }).then(chrome => {
                 chromeVal= chrome
            console.log(`Chrome debugging port running on ${chrome.port}`);
            });
    }
}, 1000)


