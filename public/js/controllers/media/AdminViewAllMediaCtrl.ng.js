angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.media = MediaCollection.find({}).fetch();;
  console.log($scope.media)
}]);
