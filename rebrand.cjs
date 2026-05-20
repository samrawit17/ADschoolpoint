const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/AfroDigital/g, 'SchoolPoint')
    .replace(/Afro Digital/g, 'SchoolPoint')
    .replace(/afrodigital\.dev/g, 'schoolpoint.com')
    .replace(/afrodigital/g, 'schoolpoint')
    .replace(/Afro_Digital/g, 'SchoolPoint')
    .replace(/info@schoolpoint\.com/g, 'hello@schoolpoint.com'); // just in case
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('./src/pages');
walkDir('./src/components');
console.log("Done rebranding strings.");
