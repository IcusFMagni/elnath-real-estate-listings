app.controller('ListingsController', ['ListingsService', function (ListingsService) {
    var self = this;
    self.listings = ListingsService.listings
}]);