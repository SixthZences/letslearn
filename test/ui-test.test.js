var webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const { By, until } = webdriver;

// Note chromedriver.exe must be download from
// https://www.selenium.dev/selenium/docs/api/javascript/index.html
// Chrome	chromedriver(.exe) using same version as the install browser

describe("webdriver", () => {
  let driver;

  beforeEach(async () => {
    var chromeOptions = new chrome.Options();

    driver = new webdriver.Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();

    await driver.get("http://localhost:3000/");
  }, 30000);

  afterEach(async () => {
    await driver.close();
  }, 30000);
  
  // test case 1
  test("Successful Admin Login", async () => {
    var username = "admin";
    var password = "12345";
    await driver.findElement(webdriver.By.name("loggedin")).click();
    await driver.findElement(webdriver.By.name("username")).sendKeys(username);
    await driver.findElement(webdriver.By.name("password")).sendKeys(password);
    
    await driver.findElement(webdriver.By.css("button[type=submit]")).click();
    output = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.name("accname")),
      10000
      );
      outputVal = await output.getAttribute("innerHTML");
      expect(outputVal).toEqual("Admin");
    });
    // test case 2
    test("Successful Member Login", async () => {
      var username = "member";
      var password = "123456";
      await driver.findElement(webdriver.By.name("loggedin")).click();
      await driver.findElement(webdriver.By.name("username")).sendKeys(username);
      await driver.findElement(webdriver.By.name("password")).sendKeys(password);
      
      await driver.findElement(webdriver.By.css("button[type=submit]")).click();
      output = await driver.wait(
        webdriver.until.elementLocated(webdriver.By.name("accname")),
        10000
        );
        outputVal = await output.getAttribute("innerHTML");
        expect(outputVal).toEqual("Member");
      });

      
      // test case 3
      test("Successful Admin Login => Dashboard", async () => {
        var username = "admin";
        var password = "12345";
        await driver.findElement(webdriver.By.name("loggedin")).click();
        await driver.findElement(webdriver.By.name("username")).sendKeys(username);
        await driver.findElement(webdriver.By.name("password")).sendKeys(password);
        
        await driver.findElement(webdriver.By.css("button[type=submit]")).click();
        
        await driver.findElement(webdriver.By.name("dashboard")).click();
        output = await driver.wait(
          webdriver.until.elementLocated(webdriver.By.name("topic")),
          10000
          );
          outputVal = await output.getAttribute("innerHTML");
          expect(outputVal).toEqual("<b>Dashboard</b>");
        });
        
        // test case 4
        test("Successful Member Login => Search", async () => {
          var username = "member";
          var password = "123456";
          var search = "General F";
          await driver.findElement(webdriver.By.name("loggedin")).click();
          await driver.findElement(webdriver.By.name("username")).sendKeys(username);
          await driver.findElement(webdriver.By.name("password")).sendKeys(password);
          
          await driver.findElement(webdriver.By.css("button[type=submit]")).click();
          
          await driver.findElement(webdriver.By.name("AllPosts")).click();
          await driver.findElement(webdriver.By.name("search")).sendKeys(search);
          await driver.findElement(webdriver.By.css("button[type=submit]")).click();
          
          output = await driver.wait(
            webdriver.until.elementLocated(webdriver.By.name("post_name")),
            10000
            );
            outputVal = await output.getAttribute("innerHTML");
            expect(outputVal).toEqual("General F");
          });
          // test case 5
          test("Successful Filter Posts", async () => {
            var username = "member";
            var password = "123456";
            var search = "F";
            await driver.findElement(webdriver.By.name("loggedin")).click();
            await driver.findElement(webdriver.By.name("username")).sendKeys(username);
            await driver.findElement(webdriver.By.name("password")).sendKeys(password);
            await driver.findElement(webdriver.By.css("button[type=submit]")).click();
            
            await driver.findElement(webdriver.By.xpath("//img[@alt='academic']")).click();
            await driver.findElement(webdriver.By.name("search")).sendKeys(search);
            await driver.findElement(webdriver.By.css("button[type=submit]")).click();
            
            output = await driver.wait(
              webdriver.until.elementLocated(webdriver.By.name("post_name")),
              10000
              );
            outputVal = await output.getAttribute("innerHTML");
            expect(outputVal).toEqual("Academic F");
          });
          
          
        });
        