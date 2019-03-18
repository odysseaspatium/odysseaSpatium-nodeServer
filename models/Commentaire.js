var db=require('../dbconnexion'); //reference of dbconnection.js

var Commentaire={
        
        async getCommentaireByVoyage(body){
            let conn, data;
            try{
                    conn = await db.getConnection();
                    data = await conn.query("select * from t_commentaire where id_voyage_commentaire=?",[body.id_voyage]);
                    await conn.end();
                }catch (err) {
                    if(conn)
                        await conn.end();
                    throw err;
                }
                return data;
        },


        async addCommentaire(Commentaire){
            let conn ,data;
            try{
                conn = await db.getConnection();
                /* ----------modifier le null par lien_photos_commentaire ----*/
                data = await conn.query("INSERT into t_commentaire values(?,?,?,?,?)",[null,Commentaire.id_voyage,Commentaire.commentaire,Commentaire.id_utilisateur,null]);
                await conn.end();
            } catch (err) {
                if(conn)
                    await conn.end();
                throw err;
            }
            return data;
        },

        

       
};
module.exports=Commentaire;