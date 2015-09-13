angular.module('adminui').controller('AdminAddNewMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  //$scope.pages = $meteor.collection(Pages, false).subscribe('pages');
  var hooksObject = {
      onSuccess: function(formType, result) {
        $state.go('admin.dashboard');
      }
  };
  AutoForm.addHooks('insertPageForm', hooksObject, true);

}]);
