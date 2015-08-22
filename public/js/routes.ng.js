user = Meteor.user();
if (Roles.userIsInRole(user, 'super-admin')) {


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
      })
      .state('admin.addnewpage', {
        url: '/addnewpage',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/addnewpage.ng.html',
        controller: 'AdminAddNewPageCtrl'
      })
      .state('admin.viewpages', {
        url: '/viewallpages',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/viewallpages.ng.html',
        controller: 'AdminViewAllPagesCtrl'
      })
      .state('admin.editpage', {
        url: '/editpage/:pageID',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admineditpage.ng.html',
        controller: 'AdminEditPageCtrl'
      });
  }]);
}


  angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){


      $locationProvider.html5Mode(true);

      $stateProvider
      .state('pages', {
        url: '/pages',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/frontend/viewpages.ng.html',
      })
      .state('singlepage', {
        url: '/p/:pageurl',
        templateUrl: 'vimes1984_foundation-angular-admin_client/templates/frontend/viewpagesingle.ng.html',
      });
  }]);
