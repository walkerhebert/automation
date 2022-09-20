const {By} = require('selenium-webdriver');

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Dragon City')
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed();

    expect(displayed).toBeTruthy()
}

module.exports = {
    deleteMovie
}