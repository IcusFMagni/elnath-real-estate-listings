var express = require('express')
var router = express.Router();
var Rental = require('../models/rentals.schema')

router.get('/', function (req, res){
    console.log('in get rentals from route');
    Rental.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery){
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        }else{
            console.log(data);
            res.send(data);
        }
    });
});

router.post('/', function (req, res) {
    console.log('/')
    var rentalToAdd = new Rental (req.body);
    rentalToAdd.save(function(errorMakingDatabaseQuery,data){
        if (errorMakingDatabaseQuery) {
            console.log('error', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});    

module.exports = router;