angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('admin', {
      url: '/admin',
      template: '<h2>TEST</h2>',
      controller: 'adminCtrl'
    });
}]);
