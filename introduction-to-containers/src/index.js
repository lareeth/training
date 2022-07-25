const express = require('express');
const os = require("os");

const app = express();

const port = 3000;


app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    'hostname': os.hostname(),
    'version': process.version,
    'env': process.env
  }));
})

app.listen(port, '0.0.0.0', () => {
  console.log('App Started on port %s!', port)
});