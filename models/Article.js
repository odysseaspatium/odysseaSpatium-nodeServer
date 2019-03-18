var db=require('../dbconnexion');

var Article={
       
        async ajoutVoyageArticle(Article){
            let conn, data;
             try{
                    conn = await db.getConnection();
                    data = await conn.query("Insert into t_article values(?,?,?)",[null, Article.id_panier,Article.id_voyage]);
                   await conn.end();
                } catch (err) {
                    if(conn)
                        await conn.end();
                    throw err;
                }
                return data;
        },

        async deleteArticle(Article){
        let conn, data;
             try{
                    conn = await db.getConnection();
                    data = await db.query("delete from t_article where id_article=?",[Article.id_panier]);
                    await conn.end();
                } catch (err) {
                    if(conn)
                        await conn.end();
                    throw err;
                }
        }
 
};
module.exports=Article;