var express = require('express')
var router = express.Router();
var Rentals = require('../models/rentals.schema')

router.get('/', function (req, res){
    console.log('in get rentals from route');
    Rentals.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery){
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        }else{
            console.log(data);
            res.send(data);
        }
    });
});


module.exports = router;