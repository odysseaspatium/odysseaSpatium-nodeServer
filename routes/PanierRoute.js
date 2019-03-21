var express = require('express');
var router = express.Router();
var Panier=require('../models/Panier');
var HistoPanier=require('../models/HistoriquePanier')
var HistoCommentaire=require('../models/HistoriqueCommentaire')



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
             Panier.getPanierByIdUser(req.body, function(err){
             
            if(err){
                    res.json(err);
            }
         }).then(function(data){
            
            res.json(data);
        });

});
 
router.post('/creer',  function(req,res){
      Panier.creerPanier(function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            var panier = new HistoPanier({id_utilisateur:req.body.id_utilisateur});
            panier.save(function(err){
                if(err) return handleError(err);
            });
            var commentaires = new HistoCommentaire({id_utilisateur:req.body.id_utilisateur});
            commentaires.save(function(err){
                if(err) return handleError(err);
            });
            res.json(data);
        });
});



router.post('/delete',function(req,res){
       
         Panier.deleteVoyageFromPanier(req.params.id,function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            res.json(data);
        });
    
});

/*router.post('/getIdPanier',function(req,res){
       
         Panier.getIdPanierByIdUser(req.params.id,function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            res.json(data);
        });
    
});*/
router.post('/valider',function(req,res){
     
        HistoPanier.findOneAndUpdate({id_utilisateur:req.body.id_utilisateur},
            {id_utilisateur:req.body.id_utilisateur,$push: {commandes:{id_voyage:req.body.voyages,prix:req.body.prix }}}
            ,{upsert:true});
       Panier.validerPanier(req.body,function(err){
            if(err){
                res.json(err);
            }
        }).then(function(data){
            res.json(data);

        });
    
});

 module.exports=router;