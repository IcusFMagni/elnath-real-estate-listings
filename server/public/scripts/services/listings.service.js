app.service('ListingsService', ['$http', function ($http) {
    var self = this;
    self.listings = { list: [] };
    
        self.getRentals = function () {
            $http({
                method: 'GET',
                url: '/listings'
            }).then(function (response) {
                console.log('response', response);
                self.listings.list = response.data;
            });
        }
    
        self.getRentals()
}]);