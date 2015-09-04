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
                type: 'textangular',
                // textangular options goes here
            }
        }
    },
    pageurl: {
        type: String,
        label: "Page url",
        regEx: /^[a-zA-Z-]{2,25}$/,
        index: true,
        unique: true,
        max: 200,
        min: 2,
    },
    metatags: {
        type: String,
        label: "META Tags",
        max: 200,
        min: 2,
        optional: true
    },
    metadesc: {
        type: String,
        label: "META Description",
        max: 200,
        min: 2,
        optional: true
    }
});

Pages.attachSchema(Schemas.Page);




/*
 User

 User data and profile information
 */
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
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'textangular',
            }
        }
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
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true,
        autoform: {
            omit: true
        }
    },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true,
        label: "Pick Roles",
        autoform: {
            options: function () {
                var roles = Roles.getAllRoles().fetch();

                return _.map(roles, function (c, i) {
                    return {label: c.name, value: c.name};
                });
            }
        }
    }
});

// Attach the user schemas to Meteor.users
Meteor.users.attachSchema(Schemas.User);


/*
 Site

 Site settings and configuration
 */
Site = new Mongo.Collection("site");

Schemas.Site = new SimpleSchema({
    sitelogo: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "cfs-file",
                collection: "images"
            }
        }
    },
    sitename: {
        type: String,
        optional: true,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    slogan: {
        type: String,
        optional: true
    },
    sitedesc: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'textangular',
            }
        }
    }
});

// Attach the Site schemas to Site
Site.attachSchema(Schemas.Site);



/**
 * Images
**/

Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("images"),
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});
