var db = require ('../dbconnexion');  //reference of dbconnection.js

var Voyage={
        async getAllJourney(callback){
            try{
                conn = await db.getConnection();
                const data = await conn.query("Select * from t_voyage");
                return data;

                } catch (err) {
                    throw err;
                } finally {
                    if (conn) 
                        return conn.end();
                }
        },


        async getJourneyById(body,callback){
            try{
                conn = await db.getConnection();
                const data = await conn.query("select * from t_voyage where id_voyage=?",[body.id]);
                return data;

                } catch (err) {
                    throw err;
                } finally {
                    if (conn) 
                    return conn.end();
                }
        },


        async creerVoyage(Voyage,callback){
         try {
                conn = await db.getConnection();
                const data = await conn.query("Insert into t_voyage values(?,?,?,?,?,?,?,?)",[Voyage.id_voyage, Voyage.nom_voyage, Voyage.dateDebut_voyage,
                                                                    Voyage.dateFin_voyage,Voyage.description_voyage,Voyage.prix_voyage,
                                                                    Voyage.lien_photos_voyage,Voyage.annonce_voyage]);
                 return data;

                } catch (err) {
                    throw err;
                } finally {
                    if (conn) 
                    return conn.end();
                }
        },

        


};
module.exports = Voyage;