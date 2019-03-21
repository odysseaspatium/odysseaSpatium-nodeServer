const express = require('express');
const app = express();
const HCommentaireRouter = express.Router();

const HcommentaireSchema = require('../models/HistoriqueCommentaire');

HCommentaireRouter.post('/add',function(req,res){
    const hCommentaire = new HcommentaireSchema(req.body);
    hCommentaire.save().then(hCommentaire =>{
        res.json('historique commentaire succes');
    })
    .catch(err => {
        res.status(400).send("unable to save historiqueCom to database");
    });
}); 
HCommentaireRouter.post('/get').post(function(req,res){
    HcommentaireSchema.find(function(req,historique){
        if(err){
            console.log(err);
        }
        else{
            res.json(historique);
        }
    })
});
 module.exports=HCommentaireRouter;