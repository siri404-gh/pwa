const express = require('express');
const https = require('https');
const fs = require('fs');
const variables = require('../variables');

const webRoot = `./${variables.dist}/`;
const port = process.env.PORT || variables.port;
const app = express();

app.set('views', webRoot);
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', express.static(webRoot));

if(process.env.PROTOCOL === 'https') {
  https.createServer({
      key: fs.readFileSync('.key.pem'),
      cert: fs.readFileSync('.cert.pem'),
      passphrase: 'qwer1234!@£$'
    }, app).listen(port);
    console.log(`Secure Server: Listening on port ${port}`);
} else {
  app.listen(port);
  console.log(`SERVER: Listening on port ${port}`);
}
