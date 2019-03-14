import { query } from '../dbconnection'; //reference of dbconnection.js

var Voyage={
        getAllJourney:function(callback){
            return query("Select * from t_voyage",callback);
        },


        getJourneyById:function(id,callback){
            return query("select * from t_voyage where Id=?",[id],callback);
        },


        addVoyage:function(Voyage,callback){
            return query("Insert into t_voyage values(?,?,?,?,?,?,?,?)",[Voyage.id_voyage, Voyage.nom_voyage, Voyage.dateDebut_voayeg,
                                                                    Voyage.dateFin_voyage,Voyage.description_voyage,Voyage.prix_voyage,
                                                                    Voyage.lien_photos_voyage,Voyage.annonce_voyage],callback);
        },

        deleteVoyage:function(id,callback){
        return query("delete from task where id_voyage=?",[id],callback);
        },
        updateVoyage:function(id,Voyage,callback){
        return query("update t_voyage set nom_voyage = ? , dateDebut_voyage = ?, dateFin_voyage = ?, description_voyage=?, prix_voyage =? , lien_photos_voyage=?,annonce_voyage=? where id_voyage=?",[Voyage.id_voyage, Voyage.nom_voyage, Voyage.dateDebut_voayeg,
                                                                    Voyage.dateFin_voyage,Voyage.description_voyage,Voyage.prix_voyage,
                                                                    Voyage.lien_photos_voyage,Voyage.annonce_voyage,id],callback);
        }

};
 export default Voyage;