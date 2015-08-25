//Site admin-page controller
angular.module('adminui').controller('SiteCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){

      $scope.site = Site.fetch();

}]);
