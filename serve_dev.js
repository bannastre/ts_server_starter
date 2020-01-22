require('dotenv').config();
const ngrok = require('ngrok');
const { startApp } = require('./dist/app');

const port = process.env.PORT || 3000;

(async function() {
  try {
    await startApp();
    const url = await ngrok.connect(port);
    console.log('Development server listening on: ', url);
  } catch (err) {
    console.log(`:server: ${err.stack}`);
    return;
  }
})();
