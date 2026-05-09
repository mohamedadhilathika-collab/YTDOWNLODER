const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.get("/download", (req, res) => {

    res.send("Download system working");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on ${PORT}`);

});
