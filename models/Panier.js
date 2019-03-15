var db = require ('../dbconnexion'); //reference of dbconnection.js

var Panier={
        async getAllPanier(callback){
            return query("Select * from t_panier",callback);
        },


        async getPanierById(body,callback){
            let conn, data;
                try {
                    conn = await db.getConnection();
                    data = await conn.query("select * from t_voyage NATURAL JOIN t_article where id_panier=?",[body.id]);
                
                } catch (err) {
                    throw err;
                } finally {
                    if (conn){
                        console.log("connect close");
                        conn.end();
                    } 
                        
                }
                 return data;
        },

        async creerPanier(Panier){
            let conn,data;
                try {
                    conn = await db.getConnection();
                    const rows = await conn.query("INSERT INTO `t_panier` VALUES (?, ?)",[null, 0.0]);
                     data = await conn.query("SELECT count(*) as id_panier from t_panier");
                    await conn.end();
                    return data[0].id_panier;
                } catch (err) {
                    conn.end();
                    throw err;
                } 
        },

      
        async validerPanier(body,callback){
            return query("delete from t_article where id_panier=?",[body.id_panier],callback);
            let conn;
                try {
                    conn = await db.getConnection();
                    const data = await conn.query("delete from t_article where id_panier=?",[body.id_panier],callback);

                } catch (err) {
                    throw err;
                } finally {
                    if (conn) 
                    return conn.end();
                }
        },

       

};module.exports=Panier;