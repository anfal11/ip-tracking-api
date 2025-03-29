export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const log = `IP: ${ip}, Time: ${new Date().toISOString()}\n`;
    
    console.log(log); // View in Vercel logs
    
    // Return a transparent pixel
    res.setHeader('Content-Type', 'image/png');
    res.send(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64'));
  }