let express = require('express');
let app = express();

app.use((req, res, next) => {
    console.log('Hello world!');
    next();
})

module.exports = app;



































 module.exports = app;
