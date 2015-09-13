angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {

    $scope.mediascope = MediaCollection.find({}).fetch();
    $scope.mediaurl = FS.HTTP.uploadUrl + "/" + Media.find().fetch()[0].collectionName;
    $scope.thumburl = FS.HTTP.uploadUrl + "/" + Media.find().fetch()[0].collectionName;

    angular.forEach($scope.mediascope, function (value, key) {
    var thisfile        = Media.findOne({_id: value.media});
    var options         = {
      store: 'thumbs',
      auth: null,
      download: false,
      metadata: false,
      brokenIsFine: false,
      uploading: null, // return this URL while uploading
      storing: null, // return this URL while storing
      filename: null
    }
    value.thismedia     = thisfile.url(options);
  });
    console.log($scope.mediascope);
}]);
