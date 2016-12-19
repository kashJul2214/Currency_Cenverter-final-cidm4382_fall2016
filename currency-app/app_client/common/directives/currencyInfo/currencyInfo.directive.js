(function () {

  angular
    .module('currencyApp')
    .directive('currencyInfo', currencyInfo);

  function currencyInfo () {
    return {
      restrict: 'EA',
      scope: {
        currency : '=info',
      },      
      templateUrl: '/common/directives/currencyInfo/currencyInfo.template.html'
    };
  }
})();