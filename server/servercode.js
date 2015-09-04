/******* Publish's **********/

Meteor.publish("users", function () {
  if (!this || !Roles.userIsInRole(this.userId, 'super-admin')) {
    throw new Meteor.Error(403, "Access denied")
  }else{
    return Meteor.users.find({}, {});
  }
});

Meteor.publish("pages", function () {
    return Pages.find();
});

Meteor.publish('site', function (){
    return Site.find();
});


Meteor.publish('logo', function (){
    var imageid = Site.find({}).fetch()[0];
    var logo = Images.find({_id: imageid.sitelogo}).fetch()[0];

    console.log(logo.copies.images.name);

    return logo;
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
  if (!this || !Roles.userIsInRole(this.userId, 'super-admin')) {
    throw new Meteor.Error(403, "Access denied")
  }else{

    return Meteor.roles.find({})

  }


});


/******* FS files **********/

Images.allow({
  insert: function () {
    return true;
  },
  download: function () {
    return true;
  },
  fetch: null
});

FS.HTTP.publish(Images, function () {
  // `this` provides a context similar to Meteor.publish
  return Images.find();
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
