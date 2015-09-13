//Help page controller
angular.module('adminui').controller('AdminEditMediaCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){

      $scope.singlepage = MediaCollection.find({_id: $stateParams.mediaID }).fetch();
      console.log($scope.singlepage);

       Template.editmedia.helpers({
          updateMediasingle: function() {
            return MediaCollection.find({}).fetch()[0];;
          }
        });

        var hooksObject = {
            onSuccess: function(formType, result) {
              $scope.singlepage = MediaCollection.find({_id: $stateParams.mediaID }).fetch();
              $window.scrollTo(0, 0);
              $scope.showalert    = true;
              $scope.alertclass   = 'success';
              $scope.message      = 'Page Saved';
              $scope.$apply();
            }
        };
        AutoForm.addHooks('updateMediaForm', hooksObject, true);
}]);
