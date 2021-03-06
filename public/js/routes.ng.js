angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {


        $locationProvider.html5Mode(true);

        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admin.ng.html',
                controller: 'MainCtrl',
                resolve: {
                  currentUser: ['$meteor', '$q', function($meteor, $q) {
                    return $meteor.requireUser().then(function(user) {
                      if(!_.contains(user.roles, 'super-admin')) {
                        // fail the promise chain
                        return $q.reject('FORBIDDEN');
                      }
                      // keep the success promise chain
                      return user;
                    });
                  }]
                }

            })
            .state('admin.dashboard', {
                url: '/dashboard',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admindashboard.ng.html',
                controller: 'MainCtrl'
            })
            .state('admin.site', {
                url: '/site',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/site.ng.html',
                controller: 'SiteCtrl'
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
            })
            .state('admin.addnewmedia', {
                url: '/addnewmedia',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminaddnewmedia.ng.html',
                controller: 'AdminAddNewMediaCtrl'
            })
            .state('admin.viewmedia', {
                url: '/viewallmedia',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/adminviewallmedia.ng.html',
                controller: 'AdminViewAllMediaCtrl'
            })
            .state('admin.editmedia', {
                url: '/editmedia/:mediaID',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admineditmedia.ng.html',
                controller: 'AdminEditMediaCtrl'
            });
    }]);


angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {


        $locationProvider.html5Mode(true);

        $stateProvider
            .state('pages', {
                url: '/pages',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/frontend/viewpages.ng.html',
            })
            .state('singlepage', {
                url: '/pages/:pageurl',
                templateUrl: 'vimes1984_foundation-angular-admin_client/templates/frontend/viewpagesingle.ng.html',
            });
    }]);
