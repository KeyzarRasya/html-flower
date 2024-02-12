const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("static"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "static"))

app.get("/", (req, res) => {
    res.render("flower")
});

app.get("/flower", (req, res) => {
    res.render("flower")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
