var mongoose = require('mongoose');

//routes schema
var routesSchema = mongoose.Schema({
    route_type:{
        type:String,
        requrie: true
    },
    route_english_name:{
        type:String,
        require: true
    },
    route_chinese_name:{
        type:String,
        require: true
    },
    route_color:{
        type:String,
        require: true
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

//Route variable
var Route = module.exports = mongoose.model('Route', routesSchema);

//GET queries
module.exports.getRoutes = function(callback, limit){
    Route.find(callback).limit(limit);
}

module.exports.getRoutesById = (id, callback)=>{
    Route.findById(id, callback);
}
module.exports.getRoutesByRouteName = (name, callback) =>{
    Route.findOne({ "route_english_name" : name}, callback);
}

module.exports.addRoutes = (content, callback)=>{
    Route.create(content, callback);
}

module.exports.upRoutes = (id, content, callback) => {
    var query = {_id: id};
    var update = {
        route_type: content.route_type
    }
    Route.findOneAndUpdate(query, update, callback);
}

module.exports.rmvRoutes = (id, callback) => {
    var query = {_id: id};
    Route.findOneAndRemove(query, callback);
}