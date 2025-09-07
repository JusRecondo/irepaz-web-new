const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

function moveHtmlToIndex(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // Recurse into subdirectories
      moveHtmlToIndex(fullPath);
    } else if (stats.isFile() && path.extname(file) === '.html' && file !== 'index.html') {
      const fileNameWithoutExt = path.basename(file, '.html');
      const newDir = path.join(dir, fileNameWithoutExt);

      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir);
      }

      const newPath = path.join(newDir, 'index.html');
      fs.renameSync(fullPath, newPath);
      console.log(`Moved ${fullPath} → ${newPath}`);
    }
  });
}

moveHtmlToIndex(outDir);
console.log('✅ Todos los archivos HTML movidos a index.html correctamente.');

//node fix-html-for-firebase.js
