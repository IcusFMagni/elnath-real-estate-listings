var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a new Schema for movie
//this will enforce our object properties
var rentalSchema = new Schema({
    cost: { type: Number},
    sqft: { type: Number, required: true},
    city: { type: String, required: true }, 
});

module.exports = mongoose.model('Listing', listingSchema)