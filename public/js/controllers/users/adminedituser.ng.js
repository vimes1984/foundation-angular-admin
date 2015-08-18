//Help page controller
angular.module('adminui').controller('adminedituserCtrl', ['$scope', '$stateParams', function($scope, $stateParams){

        $scope.usertoedit = Meteor.users.find({_id: $stateParams.userID }, {fields: {emails: 1, profile: 1}}).fetch();
        console.log($stateParams);
        console.log($scope.usertoedit);

}]);
