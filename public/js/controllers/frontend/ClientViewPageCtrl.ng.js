//Help page controller
angular.module('adminui').controller('ClientViewPageCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){


    $scope.pages = Pages.find({}).fetch();
    console.log($scope.pages)
}]);
