const fs = require('fs');
const path = require('path');

const dir = __dirname;
const template = fs.readFileSync(path.join(dir, 'cv-template.html'), 'utf8');
// Photo kept CV-only (not used elsewhere on the site) — source lives in cv/.
const photoB64 = fs.readFileSync(path.join(dir, 'profile-cv-source.jpg')).toString('base64');

const final = template.replace('{{PHOTO_BASE64}}', photoB64);
fs.writeFileSync(path.join(dir, '_cv-render.html'), final);

console.log('Rendered _cv-render.html, size:', final.length);
