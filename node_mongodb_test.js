var mongoose = require('monggose');

mongoose.connect('mongodb://localhost27017/node_database');

var db = mongoose.connection;

db.on('error',function(){

    console.log('connect fail');
});
db.once('open',function(){
    console.log('connect');

});

var member = mongoose.Schema({

    name : 'string',
    address : 'string',
    age : 'number'

});

// var Member = mongoose.model('Schema',member);

// var newMemeber = new Member({name : "jbm", address : "seoul", age : 25});
// newMemeber.save(function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//         console.log('saved');
//     }

// });

newMemeber.find(function(error,students){
    


});
