//Help page controller
angular.module('adminui').controller('AdminEditPageCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){

      $scope.singlepage = Pages.find({_id: $stateParams.pageID }).fetch();

       Template.editpage.helpers({
          updatePagesingle: function() {
            return Pages.find({}).fetch()[0];
          }
        });

        var hooksObject = {
            onSuccess: function(formType, result) {
              $scope.singlepage = Pages.find({_id: $stateParams.pageID }).fetch();
              $window.scrollTo(0, 0);
              $scope.showalert    = true;
              $scope.alertclass   = 'success';
              $scope.message      = 'Page Saved';
              $scope.$apply();
            }
        };
        AutoForm.addHooks('updatePageForm', hooksObject, true);
}]);
