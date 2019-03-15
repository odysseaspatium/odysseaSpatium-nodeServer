var db=require('../dbconnexion').default; //reference of dbconnection.js

var Commentaire={
        async getAllCommentaire(callback){
            try{
                    conn = await db.getConnection();
                    const data = await conn.query("Select * from t_commentaire",callback);
                    return data;

            } catch (err) {
                    throw err;
            } finally {
                    if (conn) 
                    return conn.end();
            }
            
        },


        async getCommentaireByVoyage(body,callback){
            try{
                    conn = await db.getConnection();
                    const data = await conn.query("select * from t_commentaire where id_voyage_commentaire=?",[body.id]);
                    return data;

            } catch (err) {
                    throw err;
            } finally {
                    if (conn) 
                    return conn.end();
            }
        },


        async creerCommentaire(Commentaire,callback){
              try{
                    conn = await db.getConnection();
                    const data = await conn.query("Insert into t_commentaire values(?,?,?,?,?)",[null,Commentaire.id_voyage,Commentaire.commentaire,Commentaire.id_utilisateur,null]);
                    return data;

            } catch (err) {
                    throw err;
            } finally {
                    if (conn) 
                    return conn.end();
            }
        },

        async deleteCommentaire(id,callback){
        return db.query("delete from t_commentaire where id_commentaire=?",[id],callback);
        },
       
};
module.exports=Commentaire;