var db = require ('../dbconnexion'); //reference of dbconnection.js

var Panier={

        async getContenuPanierById(body){
            let conn, data;
                try {
                    conn = await db.getConnection();
                    data = await conn.query("select * from t_voyage NATURAL JOIN t_article where id_panier=?",[body.id_panier]);
                    await conn.end();
                } catch (err) {
                    if(conn)
                        await conn.end();
                    throw err;
                }
                 return data;
        },
         async getPanierByIdUser(body){
             console.log(body);
             console.log(body.id_utilisateur);
             let conn, data;
                try {
                    conn = await db.getConnection();
                    data = await conn.query("select id_panier_user from t_utilisateur where id_user=?",[body.id_utilisateur]);
                    await conn.end();
                } catch (err) {
                    if(conn)
                        await conn.end();
                    throw err;
                }
                 return data;
        },

        async getIdPanierByIdUser(body){
                    let conn, data;
                    try{
                        conn = await db.getConnection();
                        data = await conn.query("SELECT id_panier_user from t_utilisateur where id_user=?", [body.id_user]);
                        await conn.end();   
                            
                    }catch(err){
                        if(conn)
                            await conn.end();
                        throw err;
                        }
                        
                        return data[0].id_panier;
                },

        async creerPanier(){
            let conn, data, rows;
            try{
                conn = await db.getConnection();
                rows = await conn.query("INSERT INTO `t_panier` VALUES (?, ?)",[null, 0.0]);
                data = await conn.query("SELECT count(*) as id_panier from t_panier");
                await conn.end();   
                    
            }catch(err){
                if(conn)
                    await conn.end();
                throw err;
                }
                
                return data[0].id_panier;
        },

      
        async validerPanier(body){
            let conn, data;
                try {
                    conn = await db.getConnection();
                    data= await conn.query("delete from t_article where id_panier=?",[body.id_panier]);
                    await conn.end();
                    
                } catch (err) {
                    if(conn)
                        await conn.end();
                    throw err;
                }
                return data;

        },

    

};
module.exports=Panier;