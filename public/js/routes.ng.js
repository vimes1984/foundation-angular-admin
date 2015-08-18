angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){


    $locationProvider.html5Mode(true);

    $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admin.ng.html',
      controller: 'mainCtrl',
      resolve: {
            "currentUser": ["$meteor", function($meteor){
              return $meteor.requireUser();
            }]
          },
    })
    .state('admin.dashboard', {
      url: '/dashboard',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admindashboard.ng.html',
      controller: 'mainCtrl'
    })
    .state('admin.viewallusers', {
      url: '/viewallusers',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminallusers.ng.html',
      controller: 'userviewallCtrl'
    })
    .state('admin.editusers', {
      url: '/edituser/:userID',
      templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminedituser.ng.html',
      controller: 'adminedituserCtrl'
    });
}]);
