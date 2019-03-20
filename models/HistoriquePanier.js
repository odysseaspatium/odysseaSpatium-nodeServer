const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistoriquePanier = new Schema({
    id_panier :{
        type:Number
    },
    commandes : [{
        id_voyage : {
            type:Number
        },
        prix : {
            type:Number
        }
    }]
    },{
        collection: 'historiquePanier'
});

module.exports = mongoose.model('HistoriquePanier',HistoriquePanier);