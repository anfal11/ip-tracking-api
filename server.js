const express = require('express');
const fs = require('fs');
const app = express();

app.get('/track', (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  const data = { ip, timestamp: new Date().toISOString() };

  // Save to a file (e.g., ips.log)
  fs.appendFileSync('ips.log', JSON.stringify(data) + '\n');

  // Return a 1x1 transparent pixel
  res.sendFile(__dirname + '/pixel.png');
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));