const {Builder, Capabilities, } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {deleteMovie} = require('../deleteMovie.js')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can delete movies', async () => {
await deleteMovie(driver)
await driver.sleep(3000)
})