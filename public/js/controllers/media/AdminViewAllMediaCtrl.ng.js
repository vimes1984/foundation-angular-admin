angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {

    $scope.mediascope = MediaCollection.find({}).fetch();
    $scope.mediaurl = FS.HTTP.uploadUrl + "/" + Media.find().fetch()[0].collectionName;
    $scope.thumburl = FS.HTTP.uploadUrl + "/" + Media.find().fetch()[0].collectionName;

    angular.forEach($scope.mediascope, function (value, key) {
    var thisfile        = Media.findOne({_id: value.media});
    value.thismedia     = thisfile.url('thumb');
  });
    console.log($scope.mediascope);
}]);
