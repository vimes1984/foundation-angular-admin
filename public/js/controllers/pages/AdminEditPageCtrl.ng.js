//Help page controller
angular.module('adminui').controller('AdminEditPageCtrl', ['$scope', '$stateParams', function($scope, $stateParams){

      $scope.singlepage = Pages.find({_id: $stateParams.pageID }).fetch();

       Template.editpage.helpers({
          updatePagesingle: function() {
            return Pages.find({_id: $stateParams.pageID }).fetch()[0];
          }
        });

        var hooksObject = {
            onSuccess: function(formType, result) {
              $scope.singlepage = Pages.find({_id: $stateParams.pageID }).fetch();
              $scope.$apply();
            }
        };
        AutoForm.addHooks('updatePageForm', hooksObject, true);
}]);
