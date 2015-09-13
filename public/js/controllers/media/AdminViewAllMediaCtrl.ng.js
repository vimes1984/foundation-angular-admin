angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.pages = Media.find({}).fetch();;
  console.log($scope.media)
}]);
