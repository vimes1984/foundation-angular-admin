angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.mediascope = MediaCollection.find({}).fetch();
  $scope.mediaurl = FS.HTTP.uploadUrl + "/" + Media.find().fetch()[0].collectionName;
  $scope.thumburl = FS.HTTP.uploadUrl + "/" + Media.find().fetch()[0].collectionName;

  angular.forEach($scope.mediascope, function(value, key){

    var thisfile        = Media.find({_id: value.media}).fetch()[0];
    value.thismedia = thisfile;
  });
    console.log($scope.mediascope);
}]);
