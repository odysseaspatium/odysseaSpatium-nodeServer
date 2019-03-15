var db=require('../dbconnexion').default; //reference of dbconnection.js

var Panier={
        getAllPanier:function(callback){
            return db.query("Select * from t_panier",callback);
        },


        getPanierById:function(id,callback){
            return db.query("select * from t_panier where Id=?",[id],callback);
        },

        creerPanier:function(callback){
            return db.query("Insert into t_panier values(?)",[0.0],callback)
        },

      
        deletePanier:function(id,callback){
        return db.query("delete from t_panier where id_panier=?",[id],callback);
        },

       

};
module.exports=Panier;