//Help page controller
angular.module('adminui').controller('AdminAddNewUserCtrl', ['$scope', '$stateParams','$meteor', '$state',
  function($scope, $stateParams, $meteor, $state){

  $scope.roles = Roles.getAllRoles().fetch();
  $scope.pages = $meteor.collection(Pages, false).subscribe('pages');

  console.log($scope.roles)
  $scope.register = function(){


    Meteor.call("addUser", $scope.newuser, function(error, response){
      console.log(error);
      if(error){
        $scope.showalert    = true;
        $scope.alertclass   = 'alert';
        $scope.message      = error.reason;
        $scope.$apply();
      }else{
        console.log(response);
        $scope.showalert    = true;
        $scope.alertclass   = 'success';
        $scope.message      = 'User regsitered';
        $scope.$apply();
      }

    });

    /*
    $meteor.createUser({
          username:    $scope.newuser.username,
          email:       $scope.newuser.email,
          password:    $scope.newuser.password,
          profile: {
            name:       $scope.newuser.name,
            additional: $scope.newuser.additional,
            blockly: []
          },
        }).then(function(){
          $scope.showalert    = true;
          $scope.alertclass   = 'alert';
          $scope.message      = 'User regsitered';
      }, function(err){
        $scope.showalert    = true;
        $scope.alertclass   = 'success';
        $scope.message      = err.reason;

      });
      */
    };

}]);
