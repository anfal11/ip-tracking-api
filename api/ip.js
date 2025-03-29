export default function handler(req, res) {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const log = `IP: ${ip}, Time: ${new Date().toISOString()}`;
    
    console.log(log);  // Logs in Vercel's dashboard

    res.status(200).json({ message: "IP Logged!", ip });
}
