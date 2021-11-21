'user strict';
var dbConn = require('../../config/db.config');

var Pessoa = function (pessoa) {
    this.email = pessoa.email;
    this.nome = pessoa.nome;
    this.endereco = pessoa.endereco;
    this.endereco_complemento = pessoa.endereco_complemento;
    this.endereco_cidade = pessoa.endereco_cidade;
    this.endereco_estado = pessoa.endereco_estado;
    this.endereco_CEP = pessoa.endereco_CEP;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Pessoa.create = function (newPerson, result) {
    dbConn.query("INSERT INTO pessoas set ?", newPerson, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Pessoa.findById = function (id, result) {
    dbConn.query("Select * from pessoas where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pessoa.findAll = function (result) {
    dbConn.query("Select * from pessoas", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('pessoas : ', res);
            result(null, res);
        }
    });
};
Pessoa.update = function (id, pessoa, result) {
    dbConn.query("UPDATE pessoas SET email=?,nome=?,endereco=?,endereco_complemento=?,endereco_cidade=?,endereco_estado=?,endereco_CEP=? WHERE id = ?",
        [pessoa.email,
        pessoa.nome,
        pessoa.endereco,
        pessoa.endereco_complemento,
        pessoa.endereco_cidade,
        pessoa.endereco_estado,
        pessoa.endereco_CEP,        
        id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
Pessoa.delete = function (id, result) {
    dbConn.query("DELETE FROM pessoas WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Pessoa.search = function (pessoa, result) {
    dbConn.query("SELECT * FROM pessoas WHERE NOME LIKE ?", '%' + pessoa + '%', function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Pessoa;


