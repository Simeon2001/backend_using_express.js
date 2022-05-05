const express = require("express");

const app = express();
const PORT  =   8000;

app.listen(PORT, () => console.log("running express server on port ${PORT} "));

app.get('/list',(request,response) => {
    response.send([
        {
            item:"milk",
            quantity:44
        },
        {
            item: "soup",
            quantity: 4
        }
    ]);
});