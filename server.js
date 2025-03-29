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
    const userAgent = req.headers['user-agent'];
    const timestamp = new Date().toISOString();
  
    // Detailed log (visible in Vercel Functions)
    console.log("📌 IP Logged:", { ip, userAgent, timestamp });
  
    res.json({ success: true, ip });
  });

module.exports = app;  // For Vercel compatibility