const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.get('/', (reg, res) => {
    res.render('index.njk');
});

app.get('/page2', (reg, res) => {
    res.render('page2.njk');
});

app.get('/form', (reg, res) => {
    console.log(req.query)
    res.render('form.njk');
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})