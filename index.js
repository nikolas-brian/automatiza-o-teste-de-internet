const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options()
    .addArguments('--ignore-certificate-errors');

(async function automacao(){

let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

try{ 
    await driver.get('https://www.speedtest.net/pt');

   

let cookies = await driver.wait(until.elementLocated(By.xpath('//*[@id="onetrust-accept-btn-handler"]')), 5000);

await cookies.click();

await driver.sleep(1000);

await driver.executeScript('document.documentElement.requestFullscreen();');


let botao = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div[1]/div[3]/div/div/div/div[2]/div[3]/div[1]/a/span[4]')), 5000);

await botao.click();




await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div[1]/div[3]/div/div/div/div[2]/div[3]/div[3]/div/div[3]/div/div/div[2]/div[4]/div/div/div[2]/div/div/ul[1]/li[2]/a ')), 100000);

let donwload = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div[1]/div[3]/div/div/div/div[2]/div[3]/div[3]/div/div[3]/div/div/div[2]/div[1]/div[1]/div/div[2]')));




let textdonwload = await donwload.getText();




let upload = await driver.wait(until.elementLocated(By.xpath('//*[@id="container"]/div[1]/div[3]/div/div/div/div[2]/div[3]/div[3]/div/div[3]/div/div/div[2]/div[1]/div[2]/div/div[2]/span')));
  
let textupload = await upload.getText();

console.log(`A velocidade  de donwload é: ${textdonwload} , e a velocidade de upload é: ${textupload}`);


    await driver.sleep(5000);

}finally{

     await driver.quit();
}

})();

