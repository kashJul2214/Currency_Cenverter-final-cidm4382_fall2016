(function() {

  angular
    .module('currencyApp')
    .controller('countryCtrl', countryCtrl);

  countryCtrl.$inject = ['$scope', 'CurrencyData', 'SelectedData'];

  function countryCtrl($scope, CountryData, CurrencyData, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);
    
    var vm = this;
    vm.content = "Rates Data";
    vm.selectedFromCountry = "";
    vm.selectedToCountry = "";
    
    //check selected from country
    if(SelectedData.selectedFromCountry !== null){
      vm.selectedfromCountry = SelectedData.selectedFromCountry;
    }
    
    //check selected to country
    if(SelectedData.selectedToCountry !== null){
      vm.selectedToCountry = SelectedData.selectedToCountry;
    }

    vm.getCurrencyData = function() {
      CurrencyData.getCurrencies()
        .success(function(data) {
          vm.currencies = data;
          console.log(vm.currencies);
        })
        .error(function(e) {
          console.log(e);
        });
    }

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedFromCountry = null;
      vm.selectedToCountry = null;
    }
    
    //saved From
    $scope.$watch(
      function(){
        return vm.selectedFromCountry;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.countryName !== oldValue.countryName){
          SelectedData.selectedFromCountry = newValue;
        } 
      }, 
      true
    );
    
    //saved To
    $scope.$watch(
      function(){
        return vm.selectedToCountry;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.countryName !== oldValue.countryName){
          SelectedData.selectedToCountry = newValue;
        } 
      }, 
      true
    );

    //call services
    vm.getCurrencyData();

  }

})();
