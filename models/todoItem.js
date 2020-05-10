const db=require('../config');

const todoSchema=db.Schema({
    text:{type:String,required:true}
});

module.exports=db.model('todo',todoSchema);