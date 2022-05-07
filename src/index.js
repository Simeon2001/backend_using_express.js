const express = require("express");
const app = express();
app.use(express.json());
const PORT  =   8000;
const urlsRoute = require("./routes/urls");
app.use(urlsRoute);

app.listen(PORT, () => console.log("running express server on port ${PORT} "));

