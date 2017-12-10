app.service('ListingsService', ['$http', function ($http) {
    var self = this;
    self.listings = { list: [] };
    self.newListing = {}
    
        self.getListings = function () {
            $http({
                method: 'GET',
                url: '/listings'
            }).then(function (response) {
                console.log('response', response);
                self.listings.list = response.data;
            });
        }

        self.addListing = function (property) {
            console.log(property)
            $http({
                method: 'POST',
                url: '/listings',
                data:  property
            }).then(function (response) {
                console.log('response', response)
                self.newListing.cost = 0;
                self.newListing.sqft = 0;
                self.newListing.city = '';
                self.getListings()
            })
        };
    
        self.getListings()
}]);