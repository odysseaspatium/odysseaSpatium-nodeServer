var express = require('express');
var router = express.Router();
var Article=require('../models/Article').default;

router.get('/:id?',function(req,res){

if(req.params.id){
    Article.getArticlesByIdPanier(req.params.id,function(err,rows){
    if(err){
            res.json(err);
    }else{
            res.json(rows);
    }
  });
 }else{
         Article.getAllArticle(function(err,rows){
         if(err){
                res.json(err);
         }else{
                res.json(rows);
         }

    });
 }
});
 

router.post('/',function(req,res){
    Article.addAricle(req.body,function(err){
        if(err){
            res.json(err);
        }else{
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id',function(req,res){
    Article.deleteArticle(req.params.id,function(err,count){
        if(err){
            res.json(err);
        }else{
            res.json(count);
        }
    });
});


 

 module.exports=router;