//Help page controller
angular.module('adminui').controller('userviewallCtrl', ['$scope', '$meteor', function($scope, $meteor){

  $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

}]);
