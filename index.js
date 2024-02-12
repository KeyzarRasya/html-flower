const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("static"))

app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.sendfile(path.join(__dirname + "/static/home.html"))
});

app.get("/flower", (req, res) => {
    res.render("flower")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
