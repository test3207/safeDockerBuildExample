const fs = require('fs');
const path = require('path');
const exampleFilePath = '../.npmrc.example';
const targetFilePath = '../.npmrc';

const token = process.env.NPM_TOKEN;
const email = process.env.NPM_EMAIL;

if (!token || !email) {
    console.log('no token or email provided');
    return;
}

const exampleFile = fs.readFileSync(path.resolve(__dirname, exampleFilePath), 'utf8');
const targetFile = exampleFile.replace(/{{NPM_TOKEN}}/g, token).replace(/{{NPM_EMAIL}}/g, email);
fs.writeFileSync(path.resolve(__dirname, targetFilePath), targetFile);
console.log('auth file generated');
