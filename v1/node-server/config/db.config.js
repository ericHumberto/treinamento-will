'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'y5^T8/%jJkws.g=',
  port: 3306,
  database : 'treinamento-turma-will_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Banco de dados conectado!");
});
module.exports = dbConn;''