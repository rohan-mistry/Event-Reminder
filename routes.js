var express=require('express');
var router=express.Router();
var todo=require('./models/todoItem');
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/',(req,res)=> {
    todo.find((err,docs)=> {
        if(err)
        {
           res.json(err); 
        }
        else{
            res.render('todo',{
                todos:docs
            })
        }
    })
    
})
router.post('/',urlencodedParser,(req,res) => {
    const item= new todo({
        text:req.body.text,
    })
    item.save((err,result) => {
        if(err){
            res.json(err);
        }
        else{
            res.redirect('/');
        }
    });
})
router.delete('/:item',(req,res)=>{
   //Important : delete doesn't work for ? in text
    todo.deleteOne({text:req.params.item},(err,data) => {
        if(err) 
        {
           throw err;
        }
        else
        {
            res.json(data);
        }
        
    })
})
module.exports=router;