# :::::::::: DO  NOT USE STILL BEING BUILT::::::
# Admin Ui Zurb Foundation and Angular Routers
This is a admin UI built on foundation zurb, angular-meteor, and angular-ui-router

##ROLES
We depend on Alanning's Roles package:
https://github.com/alanning/meteor-roles/
and so will yoru app need to so go ahead and install that first:

```bash
  meteor add alanning:roles
```
So before your able to see the admin routes you HAVE to add your user to the super-admin group so go ahead and create a user and then add in the following where "id" is your newly created user id, in your SERVER side app code in server/roles.js install roles and run this:

```javascript
    var SuperAdminUsers = [
      {_id: 'USER_ID_HERE'},
    ];
    Roles.addUsersToRoles(
      SuperAdminUsers,
      ['super-admin']
    );

```
you can also add in other user roles like so  in your serverside roles.js file:

```javascript
//Super adim users
var contributorUsers = [
  {_id: ''},
];
Roles.addUsersToRoles(
  contributorUsers,
  ['contributors']
);
```

##Schema
You can attach additional schema to the user or pages object by adding in:
```bash

meteor add aldeed:collection2

```
 to your app the in your lib/ folder create a file called schema.js and attach the additional schema like so:

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

## management
Bugs issues and the such to be tracked via gitub:
https://github.com/vimes1984/foundation-angular-admin

## Requirememts
You need at the least a accounts package:

```bash
  meteor  add accounts-password
```

To  install this package run:
```bash
  meteor  add vimes1984:foundation-angular-admin
```

### Setup!
You need to first require adminui in your app like so

```javascript

angular.module('yetibox', ['angular-meteor', 'ui.router', 'adminui']);

```


### Configuration

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
the default template can be found in partials/admin.html

Templates in use:
* admindashboard
* adminmenumain


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
so you can add sub admin pages like this in your routes.js file :

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
