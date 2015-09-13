//Help page controller
angular.module('adminui').controller('AdminEditMediaCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){

      $scope.singlepage = Pages.find({_id: $stateParams.mediaID }).fetch();

       Template.editmedia.helpers({
          updateMediasingle: function() {
            return MediaCollection.findOne();
          }
        });

        var hooksObject = {
            onSuccess: function(formType, result) {
              $scope.singlefile = MediaCollection.findOne({_id: $stateParams.mediaID });
              $window.scrollTo(0, 0);
              $scope.showalert    = true;
              $scope.alertclass   = 'success';
              $scope.message      = 'Media Saved';
              $scope.$apply();
            }
        };
        AutoForm.addHooks('updateMediaForm', hooksObject, true);
}]);
