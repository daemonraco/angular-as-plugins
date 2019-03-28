'use strict';

const concat = require('concat');
const fs = require('fs-extra');
const path = require('path');

(async function build() {
    const files = [
        './dist/plugin/runtime.js',
        './dist/plugin/polyfills.js',
        './dist/plugin/scripts.js',
        './dist/plugin/main.js',
    ];

    const destinationDir = path.join(__dirname, '../core/src/assets');
    await fs.ensureDir(destinationDir);
    await concat(files, path.join(destinationDir, 'my-plugin.js'));
})();
