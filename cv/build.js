const fs = require('fs');
const path = require('path');

const dir = __dirname;
const template = fs.readFileSync(path.join(dir, 'cv-template.html'), 'utf8');
const photoB64 = fs.readFileSync(path.join(dir, 'profile-cv-base64.txt'), 'utf8').trim();

const final = template.replace('{{PHOTO_BASE64}}', photoB64);
fs.writeFileSync(path.join(dir, '_cv-render.html'), final);

console.log('Rendered _cv-render.html, size:', final.length);
