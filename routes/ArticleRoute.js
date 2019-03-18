var express = require('express');
var router = express.Router();
var Article=require('../models/Article');


router.post('/ajoutVoyage',function(req,res){
    Article.ajoutVoyageArticle(req.body,function(err){
        if(err){
            res.json(err);
        }
    }).then(function(data){
         res.json(data);
    });
});
router.delete('/delete',function(req,res){
    Article.deleteArticle(req.params.id,function(err){
        if(err){
            res.json(err);
        }
    }).then(function(data){
        res.json(data);
    });
});


 

 module.exports=router;