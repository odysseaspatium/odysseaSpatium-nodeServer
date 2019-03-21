const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistoriqueCommentaire = new Schema({
    id_utilisateur : {
        type:Number
    },
    id_commentaires : [{
        type:Number
    }]
    },{
        collection: 'historiqueCommentaire'
});

module.exports = mongoose.model('HistoriqueCommentaire',HistoriqueCommentaire);