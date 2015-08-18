#Admin Ui Zurb Foundation and Angular Routers
:::::::::: DO  NOT USE STILL BEING BUILT::::::

This is a admin UI built on foundation zurb, angular-meteor, and angular-ui-router

##Requirememts
```bash
meteor add urigo:angular
meteor add  matthew:foundation5-sass
meteor add  fortawesome:fontawesome
meteor add  angularui:angular-ui-router
meteor add urigo:angular-ui-router
meteor add aldeed:template-extension
```
and finially install this package:
```bash
meteor  add vimes1984:foundation-angular-admin
```
An example can be found here:
https://github.com/vimes1984/foundation-admin-ui-example


##Setup!
You need to first require adminui in your app like so

```javascript

angular.module('yetibox', ['angular-meteor', 'ui.router', 'adminui']);

```

You can replace templates in your app by doing the following:
```html
<template name="myadmin">
  <h2>Test</h2>
</template>
```
then in your Client side app somewhere:
```javascript
Template.myadmin.replaces("admin");
```
the default template can be found in partials/admin.html

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
so you can add pages in like so a user like so in your routes:

```javascript

.state('admin.blog', {
  url: '/blog',
  templateUrl: 'path/to/template/blog.ng.html',
  controller: 'blogCtrl',
});

```
