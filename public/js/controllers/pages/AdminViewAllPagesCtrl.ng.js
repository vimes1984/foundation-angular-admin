angular.module('adminui').controller('AdminViewAllPagesCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.pages = Pages.find({}).fetch();;
  console.log($scope.pages)
}]);
