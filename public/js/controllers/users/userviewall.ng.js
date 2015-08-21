//Help page controller
angular.module('adminui').controller('UserViewAllCtrl', ['$scope', '$meteor', function($scope, $meteor){

  $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
  console.log($scope.users);
}]);
