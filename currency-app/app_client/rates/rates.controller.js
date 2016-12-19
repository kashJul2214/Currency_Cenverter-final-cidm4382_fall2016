(function() {

    angular
        .module('currencyApp')
        .controller('ratesCtrl', ratesCtrl);

    ratesCtrl.$inject = ['$scope', 'SelectedData', 'CurrencyExchangeRates'];

    function ratesCtrl($scope, SelectedData, CurrencyExchangeRates) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Rates";

        vm.selectedFromCountry = "";
        vm.selectedToCountry = "";

        //check selected From Country
        if (SelectedData.selectedFromCountry !== null) {
            vm.selectedFromCountry = SelectedData.selectedFromCountry;
        }
        
        //check selected To Country
        if (SelectedData.selectedToCountry !== null) {
            vm.selectedToCountry = SelectedData.selectedToCountry;
        }

        vm.getFromRate = function() {
            
            var base = vm.selectedFromCountry.currencyBase;
            console.log(base);

            CurrencyExchangeRates.getRate(base)
                .success(function(data) {
                    vm.fromRate = data;
                    console.log(vm.fromRate);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        vm.getToRate = function() {
            
            var base = vm.selectedToCountry.currencyBase;

            CurrencyExchangeRates.getRate(base)
                .success(function(data) {
                    vm.toRate = data;
                    console.log(vm.toRate);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
            //call services
        vm.getFromRate();
        vm.getToRate();
    }

})();