app.service('RentalsService', ['$http', function ($http) {
    var self = this;
    self.rentals = { list: [] };
    self.newListing = 

    self.getRentals = function () {

        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function (response) {
            console.log('response', response);
            self.rentals.list = response.data;
        });
    }

    self.addRental = function (rental) {
        console.log(rental)
        $http({
            method: 'POST',
            url: '/rentals',
            data: rental
        }).then(function (response) {
            console.log('response', response)
            self.newListing.rent = 0;
            self.newListing.sqft = 0;
            self.newListing.city = '';
            self.getRentals()
        })
    };

    self.getRentals()
}]);