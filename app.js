var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
Route = require('./models/routes')


// connect to mongoose
mongoose.connect('mongodb://localhost/hongkongMTR', { useMongoClient: true });
var db = mongoose.connection;

// connect to localhost
app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/api/routes', (req, res) => {
    Route.getRoutes(function(err, routes){
        if(err){
            throw err; }
        else{
            console.log(routes)
            res.json(routes);}
    })
})

app.get('/api/routes/:id', (req, res) => {
    Route.getRoutesById(req.params.id, function(err, route){
        if(err){
            throw err;}
        else{
            console.log(route);
            res.json(route); }
    })
} )
 


app.listen(3000);
console.log('Running port 3000');

