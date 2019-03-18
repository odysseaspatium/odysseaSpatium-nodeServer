var Router = require('express');
var router = Router();
var Voyage=require('../models/Voyage');

router.get('/getVoyage',function(req,res){
    Voyage.getVoyageById(req.body,function(err){
        if(err){
                res.json(err);
        }
    }).then(function(data){
        res.json(data);
    });
});
router.get('/getTousVoyages',function(req,res){
    Voyage.getTousVoyages(req.body,function(err){
        if(err){
                res.json(err);
        }
    }).then(function(data){
        res.json(data);
    });
});
          

module.exports = router;