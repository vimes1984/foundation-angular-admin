angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

        $urlRouterProvider.rule(function ($injector, $location) {
              //what this function returns will be set as the $location.url
              console.log($injector);
              console.log($location);
               // because we've returned nothing, no state change occurs
           });
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admin.ng.html',
      controller: 'adminCtrl',
      resolve: {
            "currentUser": ["$meteor", function($meteor){
              return $meteor.requireUser();
            }]
          },
    })
    .state('admin.dashboard', {
      url: '/dashboard',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admindashboard.ng.html',
      controller: 'adminCtrl'
    })
    .state('admin.viewallusers', {
      url: '/viewallusers',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminallusers.ng.html',
      controller: 'adminCtrl'
    });
}]);
