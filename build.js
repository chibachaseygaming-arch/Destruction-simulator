const fs = require('node:fs');
fs.mkdirSync('dist/vendor', { recursive: true });
for (const file of ['index.html', 'style.css', 'game.js', 'progression.js', 'maps.js', 'rebirth.js', 'vendor/three.min.js']) {
  fs.copyFileSync(file, `dist/${file}`);
}
console.log('Static game ready in dist/');
