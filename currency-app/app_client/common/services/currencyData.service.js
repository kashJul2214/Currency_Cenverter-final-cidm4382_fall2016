(function() {

    angular
        .module('currencyApp')
        .service('CurrencyData', currencyData);

    currencyData.$inject = ['$http'];

    function currencyData($http) {
        var getRateDataForCountry = function(countryName) {
            return $http.get('/api/currencyData/' + countryName);
        }

        return {
            getRateDataForCountry : getRateDataForCountry
        };
    }
})();
