(function() {

  angular
    .module('currencyApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedFromCountry : '',
          selectedToCountry : ''
      };
  }

})();