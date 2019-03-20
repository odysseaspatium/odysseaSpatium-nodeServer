const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistoriqueCommentaire = new Schema({
    commentaires : [{
        id_commentaire :{
            type:Number
        }
    }]
    },{
        collection: 'historiqueCommentaire'
});

module.exports = mongoose.model('HistoriqueCommentaire',HistoriqueCommentaire);