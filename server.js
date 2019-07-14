var express = require('express');
var mongojs = require('mongojs');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser());
app.use(bodyparser.json({limit:'5mb'}));
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});






const port = 4444;
app.listen(port,function(){
    console.log("port is running on "+port);
})