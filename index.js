require('dotenv').config()
var mysql = require('mysql');

var con = mysql.createConnection(`${process.env.URL_DB}`);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});