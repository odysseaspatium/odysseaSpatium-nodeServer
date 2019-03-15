var express = require('express');
var router = express.Router();
 var Panier=require('../models/Panier');


/*
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
 */

router.get('/creer',  function(req,res){
      Panier.creerPanier(req.body,function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            console.log(data);
            res.send(""+data);
        });
});



router.get('/delete',function(req,res){
       
         Panier.deleteVoyageFromPanier(req.params.id,function(err,count){
            if(err){
                res.json(err);
            }else{
                res.json(count);
            }
        });
    
});



 module.exports=router;