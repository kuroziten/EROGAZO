const express = require('express');
const fs = require('fs');
const app = express();
app.set("view engine", "ejs");
app.set('views', './');
app.use(express.static('./'))
app.get('/', (req, res) => {
    const files = fs.readdirSync('./');
    const fileList = files.filter(e => e.indexOf(".jpg") >= 0).sort() + "";
    res.render("view", {list: fileList});
});

app.listen(3000);
