const express = require('express');
const app = express();
const HpanierRouter = express.Router();
var voyage=require('../models/Voyage');
var dbmongo =require("../dbMongoConn");
var mongoose=require('mongoose');

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
    for(let index=0; index < req.body.historique.commandes.length; index++){
        for(let indexIdVoyage=0;indexIdVoyage < rreq.body.historique.commandes[index].id_voyage.length; indexIdVoyage++){
            voyage.getVoyageByIdValue(req.body.historique.commandes[index].id_voyage[indexIdVoyage],function(err){
                if(err){
                    throw err;
                }
            }).then(resultat =>{
                data.push(resultat[0]);
            })
        }
    }
    res.json(data);
    
});

HpanierRouter.post('/getHistorique', function(req,res){
    HistoriquePanierSchema.findOne({id_utilisateur:req.body.id}, function(err, historique) {
            if (err) {
                throw err;
            }else {
                res.json(historique);
            }
    });
});
module.exports=HpanierRouter;