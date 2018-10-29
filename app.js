const express = require('express');
const app = express();
const mainRouter = require('./controllers/mainRouter');

app.get('/', (req, res) => {
    res.json({ msg: "Ready API" });
});

app.use('/', mainRouter);


app.listen(3000, () => {
    console.log("App running on 3000")
})