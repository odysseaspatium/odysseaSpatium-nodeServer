const express = require('express');
const app = express();
const HCommentaireRouter = express.Router();

const HcommentaireSchema = require('../models/HistoriqueCommentaire');

HCommentaireRouter.route('/add').post(function(req,res){
    const hCommentaire = new HcommentaireSchema(req.body);
    hCommentaire.save().then(hCommentaire =>{
        res.json('historique commentaire succes');
    })
    .catch(err => {
        res.status(400).send("unable to save historiqueCom to database");
    });
});

HCommentaireRouter.route('/get').post(function(req,res){
    HcommentaireSchema.find(function(req,res){
        if(err){
            console.log(err);
        }
        else{
            res.json(historique);
        }
    })
});