angular.module('adminui').controller('AdminAddNewMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  //$scope.pages = $meteor.collection(Media, false).subscribe('media');
  var hooksObject = {
      onSuccess: function(formType, result) {
        $state.go('admin.dashboard');
      }
  };
  AutoForm.addHooks('insertMediaForm', hooksObject, true);

}]);
