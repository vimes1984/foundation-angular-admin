//Help page controller
angular.module('adminui').controller('ClientViewPageSingleCtrl', ['$scope', '$stateParams', '$window', '$state', '$sce',
  function($scope, $stateParams, $window, $state, $sce){


    $scope.page =   Pages.find({pageurl: $stateParams.pageurl}).fetch()[0];
    console.log($scope.page);

    $scope.to_trusted = function(html_code) {
      return $sce.trustAsHtml(html_code);
    };
    if(!$scope.page){
      $state.go('home');
    }
}]);
