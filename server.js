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
    `yt-dlp -f "bestvideo[height<=1080]+bestaudio/best" -o "/storage/emulated/0/Download/%(title)s.%(ext)s" "${url}"`;

    exec(command, (error, stdout, stderr) => {

if (error) {

    console.log("ERROR:");
    console.log(error);

    console.log("STDERR:");
    console.log(stderr);

    return res.send("Download Failed");

        res.send("Download Complete! Check Downloads Folder.");

    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
