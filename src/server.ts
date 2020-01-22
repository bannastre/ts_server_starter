import { startApp } from './app';

(async () => {
  try {
    await startApp();
  } catch (err) {
    console.log(`:server: ${err.stack}`);
    return;
  }
})();
