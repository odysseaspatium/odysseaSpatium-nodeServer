var express = require('express');
var router = express.Router();
var Commentaire=require('../models/Commentaire');
var HistoCommentaire=require('../models/HistoriqueCommentaire');

router.post('/getCommentaire',function(req,res){
    Commentaire.getCommentaireByVoyage(req.body,function(err){
        if(err){
                res.json(err);
        }
    }).then(function(data){
        res.json(data);
    });
});

 
router.post('/addCommentaire',function(req,res){
    Commentaire.addCommentaire(req.body,function(err){
        if(err){
            res.json(err);
        } 
    }).then(function(data){
        HistoCommentaire.findOneAndUpdate()
        res.json(data);
    });
});

 module.exports=router;