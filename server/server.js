var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongooseConnection = require('./modules/mongoose-connection');

var rentals = require('./routes/rentals');
var listings = require('./routes/listings');

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));
mongooseConnection.connect();

app.use('/rentals', rentals);
app.use('/listings', listings);

app.listen(port, function(){
    console.log('listening on port', port);  
});