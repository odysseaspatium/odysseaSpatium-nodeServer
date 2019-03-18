var db = require ('../dbconnexion');  //reference of dbconnection.js

var Voyage={
        async getTousVoyages(){
            let conn, data;
            try{
                conn = await db.getConnection();
                data = await conn.query("Select * from t_voyage ORDER BY dateDebut_voyage ASC");
                await conn.end();
            }catch (err) {
                if(conn)
                    await conn.end();
                throw err;
            }
            return data;
        },


        async getVoyageById(body){
            let conn, data;
            try{
                conn = await db.getConnection();
                data = await conn.query("select * from t_voyage where id_voyage=?",[body.id_voyage]);
                await conn.end();
                }catch (err) {
                    if(conn)
                        await conn.end();
                    throw err;
                }
            return data;
        },


        async creerVoyage(Voyage){
            let conn, data;
            try{
                conn = await db.getConnection();
                data = await conn.query("Insert into t_voyage values(?,?,?,?,?,?,?,?)",[Voyage.id_voyage, Voyage.nom_voyage, Voyage.dateDebut_voyage,
                                                                    Voyage.dateFin_voyage,Voyage.description_voyage,Voyage.prix_voyage,
                                                                    Voyage.lien_photos_voyage,Voyage.annonce_voyage]);
                await conn.end();
            }catch (err) {
                if(conn)
                    await conn.end();
                throw err;
            }
            return data;
        },
};
module.exports = Voyage;