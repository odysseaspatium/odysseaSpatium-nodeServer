var db=require('../dbconnexion');

var Article={
        async getAllArticle(callback){
            try{
                    conn = await db.getConnection();
                    const data = await conn.query("Select * from t_article",callback);
                    return data;

            } catch (err) {
                    throw err;
            } finally {
                    if (conn) 
                    return conn.end();
            }
        },


        async getArticlesByIdPanier(id,callback){
            try{
                    conn = await db.getConnection();
                    const data = await conn.query("select * from t_article where id_panier=?",[id],callback);
                    return data;

            } catch (err) {
                    throw err;
            } finally {
                    if (conn) 
                    return conn.end();
            }
        },


        async addAricle(Article,callback){
             try{
                    conn = await db.getConnection();
                    const data = await conn.query("Insert into t_article values(?,?,?)",[null, Article.id_panier,Article.id_voyage],callback);
                    return data;

            } catch (err) {
                    throw err;
            } finally {
                    if (conn) 
                    return conn.end();
            }
        },

        async deleteArticle(id,callback){
        return db.query("delete from t_article where id_article=?",[id],callback);
        }

       

};
module.exports=Article;