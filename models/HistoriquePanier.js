const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://obiwan2.univ-brest.fr:27017/myapp', {useNewUrlParser: true});
const HistoriquePanier = new Schema({
    id_user :{
        type:Number
    },
    commandes : [{
        id_voyage : [{
            type:Number
        }],
        prix : {
            type:Number
        }
    }]
    },{
        collection: 'historiquePanier'
});

module.exports = mongoose.model('HistoriquePanier',HistoriquePanier);