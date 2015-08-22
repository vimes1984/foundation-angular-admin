//Help page controller
angular.module('adminui').controller('ClientViewPageSingleCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){


    $scope.page =   Pages.find({pageurl: $stateParams.pageurl}).fetch();
    console.log($scope.page)
}]);
