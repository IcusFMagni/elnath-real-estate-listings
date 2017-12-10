app.controller('addAListingController', ['RentalsService','ListingsService', function (RentalsService, ListingsService) {
    var self = this;
    self.newListing = {}
    self.listingType = 'none'
    console.log(self.listingType)

    self.listingTypeChange = function (string) {
        self.listingType = string;
        console.log(self.listingType)
    }

}]);