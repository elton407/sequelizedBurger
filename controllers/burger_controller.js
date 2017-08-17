var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var Burgers = require('../models/burger.js');
var db = require("../models")["burgers"];

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

console.log('render function running-----------------------------------');

router.get('/burgers', (req, res) => {
    db.findAll({}).then(data => {
        var hbsObject = { burgers: data }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create',(req, res) => {
    db.create({ burgerName: req.body.burgerName },
    { devoured: req.body.devoured 
    }).then(data => {
        res.redirect('/burgers')
    })
});

router.put('/burgers/update/:id',(req, res)=> {
    db.update({ devoured: req.body.devoured }, {
        fields: ['devoured'],
        where: { id: req.params.id }
    }).then(data => {
    	res.redirect('/burgers')
    });
});

module.exports = router;