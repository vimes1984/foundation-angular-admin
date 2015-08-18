angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admin.ng.html',
      controller: 'adminCtrl'
    });
}]);
