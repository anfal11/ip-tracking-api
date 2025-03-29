export default function handler(req, res) {
    try {
        // Get the client's IP address (supports proxies)
        const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

        // Create a log with the IP and current timestamp
        const log = `IP: ${ip}, Time: ${new Date().toISOString()}`;

        // Log to Vercel's dashboard (use console.log for serverless)
        console.log(log);

        // Return a JSON response
        res.status(200).json({ message: "IP Logged!", ip });
    } catch (err) {
        // Error handling
        console.error("Error logging IP:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
