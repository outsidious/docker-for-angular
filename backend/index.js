const port = process.env.PORT || 3000;
const express = require('express');
const http = require('http');

const app = express();

app.get('/message', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({message: 'Hello, world!'});
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log('listening on *:' + port);
});
