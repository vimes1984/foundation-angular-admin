angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.media = MediaCollection.find({}).fetch();
  $scope.uploadurl = FS.HTTP.uploadUrl + "/" + Media.find().fetch()[0].collectionName;

  console.log($scope.media)
}]);
