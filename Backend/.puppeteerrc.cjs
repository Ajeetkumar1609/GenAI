const { join } = require('path');

/**
 * Keep the downloaded Chrome inside the project folder so that the binary
 * fetched at build time is still present at runtime (Render does not persist
 * the default ~/.cache directory between build and run).
 */
module.exports = { cacheDirectory: join(__dirname, '.cache', 'puppeteer') };
