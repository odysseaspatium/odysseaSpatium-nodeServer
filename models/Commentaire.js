var db=require('../dbconnexion').default; //reference of dbconnection.js

var Commentaire={
        getAllCommentaire:function(callback){
            return db.query("Select * from t_commentaire",callback);
        },


        getCommentaireById:function(id,callback){
            return db.query("select * from t_commentaire where Id=?",[id],callback);
        },


        addCommentaire:function(Commentaire,callback){
            return db.query("Insert into t_commentaire values(?,?,?,?,?)",[Commentaire.id_commentaire,Commentaire.id_voyage_commentaire,Commentaire.texte_commentaire,Commentaire.id_user, Commentaire.lien_photos_commentaire],callback);
        },

        deleteCommentaire:function(id,callback){
        return db.query("delete from t_commentaire where id_commentaire=?",[id],callback);
        },
       
};
module.exports=Commentaire;