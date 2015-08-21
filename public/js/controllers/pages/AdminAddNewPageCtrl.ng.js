//Help page controller
angular.module('adminui').controller('AdminAddNewPageCtrl', ['$scope', '$stateParams','$meteor', function($scope, $stateParams, $meteor){

  $scope.pages = $meteor.collection(Pages, false).subscribe('pages');

  console.log($scope.pages);

}]);
