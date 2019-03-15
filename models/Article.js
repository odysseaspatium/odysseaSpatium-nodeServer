var db=require('../dbconnexion');

var Article={
        getAllArticle:function(callback){
            return db.query("Select * from t_article",callback);
        },


        getArticlesByIdPanier:function(id,callback){
            return db.query("select * from t_article where id_panier=?",[id],callback);
        },


        addAricle:function(Article,callback){
            return db.query("Insert into t_article values(?,?,?)",[Article.id_article, Article.id_panier,Article.id_voyage],callback);
        },

        deleteArticle:function(id,callback){
        return db.query("delete from t_article where id_article=?",[id],callback);
        }

       

};
module.exports=Article;