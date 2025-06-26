import { connectToBrowser } from "../../helpers/setup.js";
import { runKaneAIDemoTest } from "../page/testKaneAIDemo.js";

const capabilities = [
    {
      browserName: "Chrome",
      browserVersion: "latest",
      "LT:Options": {
        platform: "Windows 11",
        build: "Playwright Sample Build",
        name: "Playwright Schedule KaneAI Demo functionality on Windows 11 - Chrome",
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        network: true,
        video: true,
        console: true,
      },
    },
    {
      browserName: "MicrosoftEdge",
      browserVersion: "latest",
      "LT:Options": {
        platform: "Windows 11",
        build: "Playwright Sample Build",
        name: "Playwright Schedule KaneAI Demo funcationlity on Windows 11 - MicrosoftEdge",
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        network: true,
        video: true,
        console: true,
      },
    },
    {
      browserName: "Chrome",
      browserVersion: "latest",
      "LT:Options": {
        platform: "MacOS Big sur",
        build: "Playwright Sample Build",
        name: "Playwright Schedule KaneAI Demo functionality on MacOS Big sur - Chrome",
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        network: true,
        video: true,
        console: true,
      },
    },
  ];

const runTestsInParallel = async () => {
  for (const capability of capabilities) {
    (async () => {
      const browser = await connectToBrowser(capability);
      const page = await browser.newPage();
      await runKaneAIDemoTest(page);
      await browser.close();
    })();
  }
};

runTestsInParallel();
