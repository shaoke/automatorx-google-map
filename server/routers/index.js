// import puppeteer from 'puppeteer';

const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

// let BROWSER = null;

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Router Time: ', Date.now());
  next();
});

/*
  POST /preview
  {
    view:{
      width: 1400,
      height: 1000
    },
    addresses: [
      'Whole Foods Market, 20955 Stevens Creek Blvd, Cupertino, CA 95014',
      '305 N Bayview Ave, Sunnyvale, CA 94085',
      "Children's Discovery Museum of San Jose, 180 Woz Way, San Jose, CA 95110",
    ]
  }
*/
router.post('/preview', (req, res) => {
  (async () => {
    const body = req.body || {};
    let addresses = body.addresses || [];
    const view = body.view || {};
    console.log("body: ", body);
    // if (!BROWSER) {
    const options = {
      headless: true,
    };
    const BROWSER = await puppeteer.launch(options);
    // }
    const page = await BROWSER.newPage();
    await page.setViewport({
      width: view.width,
      height: view.height,
      deviceScaleFactor: 2,
    });
    addresses = addresses.map(item => encodeURIComponent(item));
    const addressesStr = addresses.join('/');
    const url = `https://www.google.com/maps/dir/${addressesStr}`;
    console.log(`URL: ${url}`);
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    console.log("open google map");
    await page.click('.widget-pane-toggle-button-container');
    console.log("click close button");
    const image = await page.screenshot();
    console.log("screenshot");
    await BROWSER.close();
    // console.log(typeof image);
    // console.log(image.toString('base64'));
    res.send(`data:image/png;base64,${image.toString('base64')}`);
  })();
});

// router.post('/preview', (req, res)=>{
//   res.send("POST Preview");
// })

module.exports = router;
