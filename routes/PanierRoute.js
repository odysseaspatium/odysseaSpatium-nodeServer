var express = require('express');
 var router = express.Router();
 var Panier=require('../models/Panier').default;

router.get('/:id?',function(req,res){

if(req.params.id){
    Panier.getPanierById(req.params.id,function(err,rows){
    if(err){
            res.json(err);
    }else{
            res.json(rows);
    }
  });
 }else{
         Panier.getAllPanier(function(err,rows){
         if(err){
                res.json(err);
         }else{
                res.json(rows);
         }

    });
 }
});
 

router.get('/',function(req,res){
    Panier.creerPanierr(req.body,function(err){
        if(err){
            res.json(err);
        }else{
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});



router.delete('/',function(req,res){
         Panier.deleteVoyageFromPanier(req.params.id,function(err,count){
            if(err){
                res.json(err);
            }else{
                res.json(count);
            }
        });
    
});


 

 module.exports=router;