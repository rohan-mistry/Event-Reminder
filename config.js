const mongoose=require('mongoose');
const url=`mongodb://localhost:${process.env.PORT}/${process.env.DB_NAME}`;

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err){
        console.log('Error in connection');
    }
    else{
        console.log('Mongodb Connected!');
    }
});
module.exports=mongoose;