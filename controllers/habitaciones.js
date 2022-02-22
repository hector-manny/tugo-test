const {response, request } = require('express');
const pool = require('../database/database');

const Testget = (req, res = response) => {
    res.render("../views/habitaciones");
};

const Insert_test = (req, res = response) => {
    const number = Math.round(Math.random() * 100);
    pool.connect(function(err){
        if(err) throw err;
        const sql = `INSERT  INTO habitaciones ()`
    })
}