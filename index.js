const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("style"))

app.set("view engine", "ejs")
app.set("views", "style")

app.get("/", (req, res) => {
    res.sendfile(path.join(__dirname + "/style/home.html"))
});

app.get("/flower", (req, res) => {
    res.render("flower")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
