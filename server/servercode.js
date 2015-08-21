/******* Schemas **********/
//add in user Schema
Schema = {};

Schema.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    organization : {
        type: String,
        regEx: /^[a-z0-9A-z .]{3,30}$/,
        optional: true
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    blockly: {
        type: [Object],
        optional: true
    },
    country: {
        type: Schema.UserCountry,
        optional: true
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true
    }
});
Meteor.users.attachSchema(Schema.User);
Meteor.publish("users", function () {
  return Meteor.users.find({}, {});
});

Meteor.publish("pages", function () {
  return Pages.find();
});

/******* ROLES **********/


Roles.createRole('super-admin');
Roles.createRole('editor');
Roles.createRole('subscriber');

Meteor.publish('roles', function (){
  return Meteor.roles.find({})
});
/******* Methods **********/

//Methods
Meteor.methods({
  addUser: function (userboject) {
     // Make sure the user is logged in before inserting a task
     if (! Meteor.userId()) {
       throw new Meteor.Error("not-authorized");
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
         console.log(newuser);
    return newuser;
   }
});
