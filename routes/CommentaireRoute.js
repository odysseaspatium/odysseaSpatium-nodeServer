var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Commentaire=require('../models/Commentaire');
var HistoCommentaire=require('../models/HistoriqueCommentaire');
var dbmongo =require("../dbMongoConn");

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
        mongoose.createConnection(dbmongo);
        HistoCommentaire.findOneAndUpdate({id_utilisateur:req.body.id_utilisateur}, {$push: {id_commentaires:req.body.id_commentaire_tab}});
        mongoose.connection.close();
        res.json(data);
        
    });
});

 module.exports=router;