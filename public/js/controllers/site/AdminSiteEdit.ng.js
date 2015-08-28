//Site admin-page controller
angular.module('adminui').controller('SiteCtrl', ['$scope', '$stateParams', '$window', '$meteor', function($scope, $stateParams, $window, $meteor){

      $meteor.collection(Site, false).subscribe('site');
      $scope.siteoptions = Site.find().fetch();
      console.log( $scope.siteoptions );
       Template.siteadmin.helpers({
         SiteOptions: function() {
            return Site.find().fetch()[0];;
          }
        });

        var hooksObject = {
            onSuccess: function(formType, result) {
              $scope.siteoptions = Site.find().fetch()[0];;
              $window.scrollTo(0, 0);
              $scope.showalert    = true;
              $scope.alertclass   = 'success';
              $scope.message      = 'Options Saved';
              $scope.$apply();
            }
        };
        AutoForm.addHooks('updateSiteOptions', hooksObject, true);
}]);
