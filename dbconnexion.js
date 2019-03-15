var express = require('express');
var mariadb = require('mariadb');
var dbconnexion = express();

var connection= mariadb.createConnection({

    host: 'obiwan2.univ-brest.fr',
    port: '3306',
    user:'zidderbe0', 
    password: 'r9zczzjz',
    database: 'zfm1-zidderbe0',
    connectionLimit: 50

});

dbconnexion.get("/base", (req, res) => {
    res.send("Hello CONNECT TO BASE");
});
module.exports = connection;