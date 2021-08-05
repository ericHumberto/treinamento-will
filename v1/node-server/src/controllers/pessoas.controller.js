'use strict';

const Pessoa = require('../models/pessoas.model');

exports.findAll = function (req, res) {
    Pessoa.findAll(function (err, pessoa) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', pessoa);
        res.send(pessoa);
    });
};


exports.create = function (req, res) {
    const nova_pessoa = new Pessoa(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        console.log("Pessoa recebida", nova_pessoa)
        Pessoa.create(nova_pessoa, function (err, pessoa) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Pessoa adicionada com sucesso!", data: pessoa });
        });
    }
};


exports.findById = function (req, res) {
    Pessoa.findById(req.params.id, function (err, pessoa) {
        if (err)
            res.send(err);
        res.json(pessoa);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Pessoa.update(req.params.id, new Pessoa(req.body), function (err, pessoa) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Pessoa atualizada com sucesso' });
        });
    }

};


exports.delete = function (req, res) {
    Pessoa.delete(req.params.id, function (err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Pessoa excluida com sucesso' });
    });
};