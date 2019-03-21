const express = require('express');
const app = express();
const HpanierRouter = express.Router();
var voyage=require('../models/Voyage');
var dbmongo =require("../dbMongoConn");
var mongoose=require('mongoose');
var async=require('async');

const HistoriquePanierSchema = require('../models/HistoriquePanier');

HpanierRouter.route('/add').post(function(req,res){
    const hPanier = new HistoriquePanierSchema(req.body);
    hPanier.save().then(hpanier =>{
        res.json('historique panier succes');
    })
    .catch(err => {
        res.status(400).send("unable to save historiqueCom to database");
    });
});

HpanierRouter.post('/getVoyages', function(req,res){
    let data=[];
    async.forEachOf(req.body.historique.commandes, function(commandes,i,inner_callback ){
        async.forEachOf(commandes.id_voyage,function(voyage_id,y,callback) {
            voyage.getVoyageByIdValue(voyage_id,function(err){
                if(err) throw err;
            }).then(resultat=>{
                data.push(resultat[0]);
            });
        });
    },function(err){ 
        if(err)throw err; 
        res.json(data);
    });
});

HpanierRouter.post('/getHistorique', function(req,res){
    HistoriquePanierSchema.findOne({id_utilisateur:req.body.id}, function(err) {
        if (err)
            throw err;
        
        }).then(historique =>{
            res.json(historique);
        });
});
module.exports=HpanierRouter;