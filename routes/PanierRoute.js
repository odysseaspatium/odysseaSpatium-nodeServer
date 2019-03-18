var express = require('express');
var router = express.Router();
 var Panier=require('../models/Panier');



router.get('/contenu',function(req,res){
         Panier.getContenuPanierById(req.body, function(err){
            if(err){
                    res.json(err);
            }
         }).then(function(data){
           res.json(data);
        });

});

router.get('/idPanier',function(req,res){
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
 
router.get('/creer',  function(req,res){
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



router.get('/delete',function(req,res){
       
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

router.get('/valider',function(req,res){
       Panier.validerPanier(req.body,function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            //console.log(data);
            //res.send(JSON.stringify(data));
            res.json(data);
        });
    
});

 module.exports=router;