var mongoose = require("mongoose");

//routeInfo schema

var routeinfosSchema = mongoose.Schema({
    route_name:{
        type:String,
        require: true
    },
    stations_number:{
        type:Number,
        require: true
    },
    stations:{
        type: Array,
        require: true
    },
    termini:{
        type: Array,
        require: true
    },
    create_date:{
        type:Date,
        default: Date.now
    }
})

//create variable RouteInfo
var Routeinfo = module.exports = mongoose.model('RouteInfo', routeinfosSchema);

//GET queries
module.exports.getRouteInfo = (callback, limit) => {
    Routeinfo.find(callback).limit(limit);
}

module.exports.getRouteInfoByName = (routename, callback)=>{
    Routeinfo.find({route_name: routename}, callback);
}