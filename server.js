const express = require('express');
const fs = require('fs');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('IP Logger API - Use /track to log IPs');
});

// IP Logger route
app.get('/track', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const log = `IP: ${ip}, Time: ${new Date().toISOString()}\n`;
  
  // Log to file and console
  fs.appendFileSync('ips.log', log);
  console.log(log);

  // Return a 1x1 pixel or JSON
  res.status(200).json({ success: true, ip });
});

module.exports = app;  // For Vercel compatibility