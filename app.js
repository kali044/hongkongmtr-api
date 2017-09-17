var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
Route = require('./models/routes')
Routeinfo = require('./models/routeInfos')

app.use(bodyParser.json());

// connect to mongoose
mongoose.connect('mongodb://localhost/hongkongMTR', { useMongoClient: true });
var db = mongoose.connection;

// connect to localhost
app.get('/', function(req, res){
    res.send('It works');
});

app.get('/api/routes', (req, res) => {
    Route.getRoutes(function(err, routes){
        if(err){
            throw err; }
        else{
            console.log(routes);
            res.json(routes);}
    })
})

app.post('/api/routes', (req,res) => {
    var content = req.body;
    Route.addRoutes(content, (err, content)=>{
        if(err){
            throw err;
        }
        console.log(content);
        res.json(content);
    } )
})

app.put('/api/routes/:id', (req, res) => {
    var route = req.body;
    Route.upRoutes(req.params.id, route, (err, route) => {
        if(err){
            throw err;}
        else{
            console.log(req.body);
            res.json(route); }
    })
} )

app.delete('/api/routes/:id', (req, res) => {
    var route = req.body;
    Route.rmvRoutes(req.params.id, (err, route) => {
        if(err){
            throw err;}
        else{
            res.json(route); }
    })
} )


app.get('/api/routes/id/:id', (req, res) => {
    Route.getRoutesById(req.params.id, function(err, route){
        if(err){
            throw err;}
        else{
            console.log(route);
            res.json(route); }
    })
} )

app.get('/api/routes/:name', (req, res)=>{
    Route.getRoutesByRouteName(req.params.name, function(err, route){
        if(err){
            throw err;
        }
        else{
            console.log(route);
            res.json(route);
        }
    })
})
 
app.get('/api/routesinfo', (req, res)=>{
    Routeinfo.getRouteInfo(function(err, routeinfos){
        if (err){
            throw err;}
        else{
            console.log(routeinfos);
            res.json(routeinfos);
        }
    })
})

app.get('/api/routesinfo/:routename', (req, res)=>{
    Routeinfo.getRouteInfoByName(req.params.routename, function(err, routeinfos){
        if (err){
            throw err;}
        else{
            console.log(routeinfos);
            res.json(routeinfos);
        }
    })
})


app.listen(3000, () => {
    console.log('Running port 3000');
});


