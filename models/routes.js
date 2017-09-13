var mongoose = require('mongoose');

//schema
var routesSchema = mongoose.Schema({
    route_type:{
        type:String,
        requried: true
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

var Route = module.exports = mongoose.model('Route', routesSchema);

//get routes
module.exports.getRoutes = function(callback, limit){
    Route.find(callback).limit(limit);
}

module.exports.getRoutesById = (id, callback)=>{
    Route.findById(id, callback);
}