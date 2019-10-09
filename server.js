const path = require("path");
const express = require("express");

const app = express();
app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);
