var Router = require('express');
var router = Router();
var Voyage=require('../models/Voyage').default;

router.get('/:id?',function(req,res){

if(req.params.id){
    Voyage.getJourneyById(req.params.id,function(err,rows){
    if(err){
            res.json(err);
    }else{
            res.json(rows);
    }
  });
 }else{
         Voyage.getAllJourney(function(err,rows){
         if(err){
                res.json(err);
         }else{
                res.json(rows);
         }

    });
 }
});
 

router.post('/',function(req,res){
    Voyage.addVoyage(req.body,function(err){
        if(err){
            res.json(err);
        }else{
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id',function(req,res){
    Voyage.deleteVoyage(req.params.id,function(err,count){
        if(err){
            res.json(err);
        }else{
            res.json(count);
        }
    });
});


 
router.put('/:id',function(req,res){
    Voyage.updateVoyage(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
 });
 module.exports = router;