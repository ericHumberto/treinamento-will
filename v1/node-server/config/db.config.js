'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port: 3307,
  database : 'treinamento-turma-will_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Banco de dados conectado!");
});
module.exports = dbConn;