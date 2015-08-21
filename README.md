# Admin Ui Zurb Foundation and Angular Routers
:::::::::: DO  NOT USE STILL BEING BUILT::::::
This is a admin UI built on foundation zurb, angular-meteor, and angular-ui-router

##ROLES
We depend on Alanning's Roles package:
https://github.com/alanning/meteor-roles/
So before your able to see the admin routes you HAVE to add yoru user to the super-admin group, in your client side app somewhere install roles and run this:

```javascript
  user = Meteor.user();
  Roles.addUsersToRoles(user, ['admin','staff']);
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
