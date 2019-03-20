const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'obiwan2.univ-brest.fr',
    port: '3306',
    user:'zidderbe0', 
    password: 'r9zczzjz',
    database: 'zfm1-zidderbe0',
    connectionLimit: 1
    });

module.exports=pool;