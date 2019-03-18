var express = require('express');
var router = express.Router();
var Commentaire=require('../models/Commentaire').default;

router.get('/getCommentaire',function(req,res){
    Commentaire.getCommentaireByVoyage(req.body,function(err){
        if(err){
                res.json(err);
        }
    }).then(function(data){
        res.json(data);
    });
});

 
router.get('/addCommentaire',function(req,res){
    Commentaire.addCommentaire(req.body,function(err){
        if(err){
            res.json(err);
        } 
    }).then(function(data){
        res.json(data);
    });
});

 module.exports=router;