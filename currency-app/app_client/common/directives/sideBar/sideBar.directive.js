(function () {

  angular
    .module('currencyApp')
    .directive('sidebar', sideBar);

  function sideBar () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/sideBar/sideBar.template.html'
    };
  }
})();