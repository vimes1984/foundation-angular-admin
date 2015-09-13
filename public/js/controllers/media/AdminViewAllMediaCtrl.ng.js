angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.pages = Pages.find({}).fetch();;
  console.log($scope.pages)
}]);
