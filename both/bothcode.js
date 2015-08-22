//Page Schemas
Pages = new Mongo.Collection("pages");

var Schemas = {};

SimpleSchema.messages({
  "urlMatch": "Url allready exists"
});

Schemas.Page = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    content: {
        type: String,
        label: "Page content",
        autoform: {
          afFieldInput: {
            type: 'froala',
            inlineMode: false,
            height: 300,
            // froala options goes here
          }
        }
    },
    pageurl: {
        type: String,
        label: "Page url",
        regEx: /^[a-zA-Z-]{2,25}$/,
        custom: function(){

          var checkurl = Pages.find({pageurl: this.value}).fetch();
          if(checkurl.length != 0){
            //it doesn't so we can create a new one
            return 'urlMatch';

          }
        },
        max: 200,
        min: 2,
    }
});

Pages.attachSchema(Schemas.Page);

Schemas.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

Schemas.UserProfile = new SimpleSchema({
    name: {
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
        type: Schemas.UserCountry,
        optional: true
    }
});

Schemas.User = new SimpleSchema({
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
        type: Schemas.UserProfile,
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
Meteor.users.attachSchema(Schemas.User);
