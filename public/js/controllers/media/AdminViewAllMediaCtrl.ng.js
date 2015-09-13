angular.module('adminui').controller('AdminViewAllMediaCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {

  $scope.mediascope = $meteor.collection(MediaCollection);

    angular.forEach($scope.mediascope, function (value, key) {
    var thisfile        = Media.findOne({_id: value.media});
    var originalopts         = {
      store: 'media',
      auth: null,
      download: false,
      metadata: false,
      brokenIsFine: false,
      uploading: null, // return this URL while uploading
      storing: null, // return this URL while storing
      filename: null
    };
    var thumbopts         = {
      store: 'thumbs',
      auth: null,
      download: false,
      metadata: false,
      brokenIsFine: false,
      uploading: null, // return this URL while uploading
      storing: null, // return this URL while storing
      filename: null
    };
    value.original     = thisfile.url(originalopts);
    value.thumbnail     = thisfile.url(thumbopts);
  });
    console.log($scope.mediascope);
}]);
