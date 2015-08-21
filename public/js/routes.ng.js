user = Meteor.user();
if (Roles.userIsInRole(user, 'super-admin')) {

  // True!  Even though Joe doesn't manage Real Madrid, he is 'super-admin' in
  // the Global Group so this check succeeds.

  angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){


      $locationProvider.html5Mode(true);

      $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admin.ng.html',
        controller: 'MainCtrl',
        resolve: {
              "currentUser": ["$meteor", function($meteor){
                return $meteor.requireUser();
              }]
            },
      })
      .state('admin.dashboard', {
        url: '/dashboard',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admindashboard.ng.html',
        controller: 'MainCtrl'
      })
      .state('admin.viewallusers', {
        url: '/viewallusers',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminallusers.ng.html',
        controller: 'UserViewAllCtrl'
      })
      .state('admin.editusers', {
        url: '/edituser/:userID',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminedituser.ng.html',
        controller: 'AdminEditUserCtrl'
      })
      .state('admin.addnewuser', {
        url: '/addnewuser',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminnewuser.ng.html',
        controller: 'AdminAddNewUserCtrl'
      });
  }]);
}
