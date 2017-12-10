var express = require('express')
var router = express.Router();
var Listing = require('../models/listings.schema')

router.get('/', function (req, res){
    console.log('in get listings from route');
    Listing.find({}, function(errorMakingDatabaseQuery, data){
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
    var listingToAdd = new Listing (req.body);
    listingToAdd.save(function(errorMakingDatabaseQuery,data){
        if (errorMakingDatabaseQuery) {
            console.log('error', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
    
});

module.exports = router;