//Help page controller
angular.module('adminui').controller('AdminEditUserCtrl', ['$scope', '$stateParams', '$window', function($scope, $stateParams, $window){

        $scope.singleuser = Meteor.users.find({_id: $stateParams.userID }).fetch()[0];

        console.log($scope.singleuser);

         Template.edituser.helpers({
           UpdateUserSingle: function() {
              return Meteor.users.find({_id: $stateParams.userID }).fetch()[0];
            }
          });

          var hooksObject = {
              onSuccess: function(formType, result) {
                $scope.singleuser = Meteor.users.find({_id: $stateParams.userID }).fetch()[0];
                $window.scrollTo(0, 0);
                $scope.showalert    = true;
                $scope.alertclass   = 'success';
                $scope.message      = 'User Saved';
                $scope.$apply();
              }
          };
          AutoForm.addHooks('updateUserForm', hooksObject, true);

}]);
