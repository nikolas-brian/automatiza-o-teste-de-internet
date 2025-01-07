const {Builder, By, until} = require('selenium-webdriver');

(async function automacao(){

let driver = await new Builder().forBrowser('chrome').build();

try{ 
    await driver.get('https://www.speedtest.net/pt');

let botao = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div[1]/div[3]/div/div/div/div[2]/div[3]/div[1]/a/span[4]')), 5000);

await botao.click();

console.log("aqui ");
await driver.sleep(50000);
let donwload = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div[1]/div[3]/div/div/div/div[2]/div[3]/div[3]/div/div[3]/div/div/div[2]/div[1]/div[1]/div/div[2]')));
console.log("aqui 2");
let textdonwload = await donwload.getText();
console.log(textdonwload);



let upload = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div[1]/div[3]/div/div/div/div[2]/div[3]/div[3]/div/div[3]/div/div/div[2]/div[1]/div[2]/div/div[2]/span')));
  
let textupload = await upload.getText();


    await driver.sleep(5000);

}finally{

    // await driver.quit();
}

})();

