var express = require('express');
var router = express.Router();
var Commentaire=require('../models/Commentaire').default;

router.get('/:id?',function(req,res){

if(req.params.id){
    Commentaire.getCommentaireById(req.params.id,function(err,rows){
    if(err){
            res.json(err);
    }else{
            res.json(rows);
    }
  });
 }else{
         Commentaire.getAllCommentaire(function(err,rows){
         if(err){
                res.json(err);
         }else{
                res.json(rows);
         }

    });
 }
});
 

router.post('/',function(req,res){
    Commentaire.addCommentaire(req.body,function(err){
        if(err){
            res.json(err);
        }else{
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id',function(req,res){
    Commentaire.deleteCommentaire(req.params.id,function(err,count){
        if(err){
            res.json(err);
        }else{
            res.json(count);
        }
    });
});


 
router.put('/:id',function(req,res){
    Voyage.updateVoyage(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
 });
 module.exports=router;