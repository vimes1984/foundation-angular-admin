//Help page controller
angular.module('adminui').controller('AdminEditMediaCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){

      $scope.singlepage = Pages.find({_id: $stateParams.mediaID }).fetch();

       Template.editpage.helpers({
          updateMediasingle: function() {
            return MediaCollection.findOne();
          }
        });

        var hooksObject = {
            onSuccess: function(formType, result) {
              $scope.singlepage = Pages.findOne({_id: $stateParams.mediaID });
              $window.scrollTo(0, 0);
              $scope.showalert    = true;
              $scope.alertclass   = 'success';
              $scope.message      = 'Page Saved';
              $scope.$apply();
            }
        };
        AutoForm.addHooks('updateMediaorm', hooksObject, true);
}]);
