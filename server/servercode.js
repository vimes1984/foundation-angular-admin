/******* P{ublish's **********/

Meteor.publish("users", function () {
  var loggedInUser = Meteor.user();
  if (!loggedInUser || !Roles.userIsInRole(loggedInUser, 'super-admin')) {
    throw new Meteor.Error(403, "Access denied")
  }else{

    return Meteor.users.find({}, {});
  }

});


Meteor.publish("pages", function () {

  var loggedInUser = Meteor.user();
  if (!loggedInUser || !Roles.userIsInRole(loggedInUser, 'super-admin')) {
    throw new Meteor.Error(403, "Access denied")
  }else{

    return Pages.find();

  }

});

/******* ROLES **********/
//Super adim users
var editorUsers = [
  {_id: ''},
];
Roles.addUsersToRoles(
  editorUsers,
  ['editor']
);


Meteor.publish('roles', function (){
  var loggedInUser = Meteor.user();
  if (!loggedInUser || !Roles.userIsInRole(loggedInUser, 'super-admin')) {
    throw new Meteor.Error(403, "Access denied")
  }else{

    return Meteor.roles.find({})

  }


});
/******* Methods **********/

//Methods
Meteor.methods({
  /**
   * Adds  a user to a specific Role
   *
   * @method addUser
   * @param {object}
   *
   */
  addUser: function (userboject) {
     // Make sure the user is superadmin before allowing them to set roles
     var loggedInUser = Meteor.user()

     if (!loggedInUser ||!Roles.userIsInRole(loggedInUser,  'super-admin')) {
       throw new Meteor.Error(403, "Access denied")
     }
     console.log(userboject);
     var newuser = Accounts.createUser({
                     username:    userboject.username,
                     email:       userboject.email,
                     password:    userboject.password,
                     profile: {
                       name:       userboject.name,
                       additional: userboject.additional,
                       blockly: []
                     },
                   });

    Roles.setUserRoles(newuser, userboject.role.name);
    console.log(userboject);
    return newuser;
  },

  /**
   * delete a user from a specific group
   *
   * @method deleteUser
   * @param {String} targetUserId _id of user to delete
   * @param {String} group Company to update permissions for
   */
  deleteUser: function (targetUserId, group) {
    var loggedInUser = Meteor.user()

    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, 'super-admin')) {
      throw new Meteor.Error(403, "Access denied")
    }

    // remove permissions for target up
    Roles.setUserRoles(targetUserId, [])

    // do other actions required when a user is removed...
  }
});
