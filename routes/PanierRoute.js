var express = require('express');
var router = express.Router();
 var Panier=require('../models/Panier');



router.post('/contenu',function(req,res){
         Panier.getContenuPanierById(req.body, function(err){
            if(err){
                    res.json(err);
            }
         }).then(function(data){
           res.json(data);
        });

});

router.post('/idPanier',function(req,res){
            console.log(req);
            console.log(req.body);
            console.log(req.body.id_utilisateur);
             Panier.getPanierByIdUser(req.body, function(err){
             
            if(err){
                    res.json(err);
            }
         }).then(function(data){
           // console.log(data);
            //res.send(JSON.stringify(data));
            res.json(data);
        });

});
 
router.post('/creer',  function(req,res){
      Panier.creerPanier(function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            //console.log(data);
            //res.send(JSON.stringify(data));
            res.json(data);
        });
});



router.post('/delete',function(req,res){
       
         Panier.deleteVoyageFromPanier(req.params.id,function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            //console.log(data);
            //res.send(JSON.stringify(data));
            res.json(data);
        });
    
});

router.post('/valider',function(req,res){
       Panier.validerPanier(req.body,function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            res.json(data);
        });
    
});

 module.exports=router;