const express = require('express');
const app = express();
const HpanierRouter = express.Router();
var voyage=require('../models/Voyage');

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

HpanierRouter.route('/get').post(function(req,res){
    HistoriquePanierSchema.findOne({id_utilisateur:req.body.id},function(err,historique){
        if(err){
            console.log(err);
        }
        
    }).then(historique =>{
        let data=[];
        for(let index=0; historique.length(); index++){
            data.push(voyage.getVoyageById(historique[index].id_voyage));
        }
        res.json(data);

    })
});