app.controller('RentalsController', ['RentalsService', function (RentalsService) {
    var self = this;
    self.rentals = RentalsService.rentals
    console.log (self.rentals)
}]);