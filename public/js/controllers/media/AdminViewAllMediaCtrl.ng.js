angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.media = MediaCollection.find({}).fetch();
  $scope.httpFS = FS.HTTP.uploadUrl;
  console.log($scope.media)
}]);
