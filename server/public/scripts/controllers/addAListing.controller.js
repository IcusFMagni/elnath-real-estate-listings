app.controller('addAListingController', ['RentalsService','ListingsService', function (RentalsService, ListingsService) {
    var self = this;
    self.listingType = 'none'
    self.newListing = ListingsService.newListing
    self.newRental = RentalsService.newRental
    console.log(self.listingType)

    self.listingTypeChange = function (string) {
        self.listingType = string;
        console.log(self.listingType)
    }

    self.addListing = ListingsService.addListing
    self.addRental = RentalsService.addRental

    

    

}]);