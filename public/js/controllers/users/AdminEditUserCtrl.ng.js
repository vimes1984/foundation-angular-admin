//Help page controller
angular.module('adminui').controller('AdminEditUserCtrl', ['$scope', '$stateParams', function($scope, $stateParams){

        $scope.singleuser = Meteor.users.find({_id: $stateParams.userID }).fetch();

         Template.edituser.helpers({
           UpdateUserSingle: function() {
              return Meteor.users.find({_id: $stateParams.userID }).fetch()[0];
            }
          });

          var hooksObject = {
              onSuccess: function(formType, result) {
                $scope.singleuser = Meteor.users.find({_id: $stateParams.userID }).fetch();
                $scope.$apply();
              }
          };
          AutoForm.addHooks('updateUserForm', hooksObject, true);

}]);
