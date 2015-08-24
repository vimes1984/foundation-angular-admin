# :: DO  NOT USE STILL BEING BUILT ::

# Admin Ui Zurb Foundation and Angular Routers

This is a admin UI built on foundation zurb, angular-meteor, and angular-ui-router

## Requirements

You need at the least an accounts package (for login and user management):

```bash
  meteor add accounts-password
```

Feel free to add as many other [accounts packages](https://atmospherejs.com/?q=accounts-) as you desire.

and the roles package (for access definition and privilege separation):
```bash
  meteor add alanning:roles
```

and the collection2 package (for automatic schema validation and management):
```bash
meteor add aldeed:collection2
```
and of course the angular-meteor and angular-ui packages  if you want to use the same app structure in your front end 
stuff, or extend the admin ui:

```bash

meteor add urigo:angular
meteor add angularui:angular-ui-router
meteor add urigo:angular-ui-router

```

Last, but not least, this package:
```bash
  meteor  add vimes1984:foundation-angular-admin
```

### Setup!
You need to first require ```adminui``` in your angular app like so (typically in 
```client/js/configs/appconfig/appinit/ap.ng.js``` ):

```javascript

angular.module('YOURAPPNAME', ['angular-meteor', 'ui.router', 'adminui']);

```

Ensure that ```YOURAPPNAME``` is matched in the templates ( for example: ```<body ng-app="YOURAPPNAME">``` ), and of 
course - change it to what makes sense for your application.

## ROLES
We depend on Alanning's Roles package:
https://github.com/alanning/meteor-roles/
and your app will need to as well. So, go ahead and install that first:

```bash
  meteor add alanning:roles
```

Before you are able to see the admin routes, you *have* to add your user to the super-admin group.  Create a 
user and then add in the following where "id" is your newly created user id, in your SERVER side app code in 
```server/roles.js``` install roles and run this:

```javascript
    var SuperAdminUsers = [
      {_id: 'USER_ID_HERE'},
    ];
    Roles.addUsersToRoles(
      SuperAdminUsers,
      ['super-admin']
    );

```
*(we will be changing this requirement soon, so that the first user will be automatically promoted to super user)*

You can expand the list of available roles by adding them in your serverside ```roles.js``` file like so:

```javascript
//Super admin users
var contributorUsers = [
  {_id: ''},
];
Roles.addUsersToRoles(
  contributorUsers,
  ['contributors']
);
```

## Schema
You can attach additional schema to the user or pages object by adding in:
```bash
meteor add aldeed:collection2
```

to your app, then in your ```lib/``` folder create a file called schema.js and attach the additional schema like so:

```javascript
var Schemas = {};
Schemas.UserProfile = new SimpleSchema({
  myfield: {
    type: String,
    optional: true
  }
});

Schemas.User = new SimpleSchema({
    profile: {
        type: Schemas.UserProfile,
        optional: true
    }
});

Meteor.users.attachSchema(Schemas.User);
```

### Or to the pages object like so:

```javascript

var Schemas = {};

Schemas.Page = new SimpleSchema({
    CustomField: {
        type: String,
        label: "Title",
        max: 200
    }
});

Pages.attachSchema(Schemas.Page);

```

## Management
Bugs issues and the such to be tracked via gitub:
https://github.com/vimes1984/foundation-angular-admin



### Configuration
Angular has been configured to use [[ ]] instead of {{ }} you'd be best of to do the same on the frontend:
```javascript

angular.module('myApp').config([
  '$interpolateProvider',
  function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }
]);
```

You can replace templates in your app by doing the following:

```html
<template name="myadmin">
  <h2>Test</h2>
</template>
```

then in your Client side app somewhere:

```javascript
Template.myadmin.replaces("admindashboard");
```

the default templates can be found in partials/

Templates in use:
* admindashboard
* adminmenumain
* addpage
* admin
* editpage
* edituser
* pagescollection ( you will probably need to edit this to adapt to your own personal template)
* pagesingle ( and this one aswell to match your own front end layoput...)

We are using http://docs.meteor.com/#/full/accounts_api so you will need to set up signin/up forms or use something like: https://atmospherejs.com/meteor/accounts-ui ...

To you can place a link to the admin like so:

```html
  <a href="/admin/dashboard">Admin</a>
```

### Adding additional routes

We are defining our route as

```javascript
$stateProvider
.state('admin', {
  url: '/admin',
  templateUrl: 'vimes1984_foundation-angular-admin_client/templates/admin.ng.html',
  controller: 'adminCtrl',
  resolve: {
        "currentUser": ["$meteor", function($meteor){
          return $meteor.requireUser();
        }]
      },
});
```

so you can add sub admin pages like this in your ```routes.js``` file :

```javascript

.state('admin.blog', {
  url: '/blog',
  templateUrl: 'path/to/template/blog.ng.html',
  controller: 'blogCtrl',
});

```

Then define a controller for your new view:

```javascript
  angular.module('APPNAME').controller('blogCtrl', ['$scope', function($scope){
    //Define your controller here..

  }]);
```

#### Example
A fully functional basic example can be found here:

https://github.com/vimes1984/foundation-admin-ui-example

this includes basic templates on the front end with login forms and such...
