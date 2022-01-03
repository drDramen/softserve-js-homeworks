const http = require('http');
const os = require('os');
const pm = require('./personalmodule.js');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`
      <p>Date of request: ${new Date()}</p>
      <p>${pm.sayGreeting(os.userInfo().username)}</p>
  `);
    res.end();
  })
  .listen(5000);
