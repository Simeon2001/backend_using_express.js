const express = require("express");

const app = express();
const PORT  =   8000;

app.listen(PORT, () => console.log("running express server on port ${PORT}"))