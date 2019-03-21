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
function hello(callback){
    console.log("hello");
    callback();
}
function listing(historique,callback){
    
    let data=[];
    for(let index=0; index<historique.commandes.length; index++){
        for(let indexIdVoyage=0;indexIdVoyage<historique.commandes[index].id_voyage.length;indexIdVoyage++){
            voyage.getVoyageByIdValue(historique.commandes[index].id_voyage[indexIdVoyage],function(err){
                if(err){
                    throw err;
                }
            }).then(resultat =>{
                data.push(resultat[0]);
                console.log(data);
            })
        }
    }
    console.log(data);
    callback(data);
}

HpanierRouter.post('/get', function(req,res){
    HistoriquePanierSchema.findOne({id_utilisateur:req.body.id}, function(err, historique) {
            if (err) {
                throw err;
            }else {
                console.log(historique);
                hello(()=>console.log("world"))

                listing(historique,data=>{
                    console.log(data);
                    res.json(data);
                });
                /*listing(historique).then(data=>{
                    console.log(data);
                    res.json(data);
                });*/
            }
    });
});
module.exports=HpanierRouter;