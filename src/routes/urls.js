const { Router } = require("express");
const router = Router();
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

router.get('/list',(request,response) => {
    response.send(data);
});

router.get('/list/:item',(request,response) => {
    const {item} = request.params;
    const listItem = data.find((g) => g.item === item);
    console.log(listItem);
    response.send(listItem);
})

router.post("/list", (request,response) => {
    console.log(request.body);
    data.push(request.body)
    response.send("<h1>save</h1>");
    response.sendStatus(201);
});

module.exports = router;