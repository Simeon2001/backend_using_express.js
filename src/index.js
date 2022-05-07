const express = require("express");
const app = express();
app.use(express.json());
const PORT  =   8000;
const data = [
    {
        item:"milk",
        quantity:44
    },
    {
        item: "soup",
        quantity: 4
    }
];

app.listen(PORT, () => console.log("running express server on port ${PORT} "));

app.get('/list',(request,response) => {
    response.send(data);
});

app.get('/list/:item',(request,response) => {
    const {item} = request.params;
    const listItem = data.find((g) => g.item === item);
    console.log(listItem);
    response.send(listItem);
})

app.post("/list", (request,response) => {
    console.log(request.body);
    data.push(request.body)
    response.send("<h1>save</h1>");
    response.sendStatus(201);
});