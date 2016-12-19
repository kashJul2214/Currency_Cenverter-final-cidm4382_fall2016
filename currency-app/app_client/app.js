(function () {

  angular.module('currencyApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("TEST");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/country/', {
        templateUrl: '/country/country.view.html',
        controller: 'countryCtrl',
        controllerAs: 'vm'
      })
      .when('/rates/', {
        templateUrl: '/rates/rates.view.html',
        controller: 'ratesCtrl',
        controllerAs: 'vm'
      })      
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('currencyApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();