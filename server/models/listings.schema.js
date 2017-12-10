var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a new Schema for listings
//this will enforce our object properties
var listingSchema = new Schema({
    cost: { type: Number},
    sqft: { type: Number, required: true},
    city: { type: String, required: true }, 
});

module.exports = mongoose.model('Listing', listingSchema)