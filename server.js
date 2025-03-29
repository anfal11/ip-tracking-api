const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const log = `IP: ${ip}, Time: ${new Date().toISOString()}\n`;

    // Save IP to a log file
    fs.appendFileSync("ips.log", log);

    console.log(log);
    res.send("IP Logged Successfully!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
