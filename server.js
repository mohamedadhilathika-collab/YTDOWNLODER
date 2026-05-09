const express = require("express");
const { exec } = require("child_process");

const app = express();

app.use(express.static(__dirname));

app.get("/download", (req, res) => {

    const url = req.query.url;

    if (!url) {
        return res.send("No URL Provided");
    }

    const command =
    `yt-dlp -f "22/best" "${url}"`;

    exec(command, (error, stdout, stderr) => {

        if (error) {

            console.log(stderr);

            return res.send("Download Failed");

        }

res.send(stdout || "Download Complete");
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on ${PORT}`);

});
