/*Global*/
Package.describe({
  name: 'vimes1984:foundation-angular-admin',
  version: '0.0.18',
  // Brief, one-line summary of the package.
  summary: 'Installs an admin ui using zurb',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vimes1984/foundation-angular-admin.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.3');
  //client dependencies
  api.use([
    'matthew:foundation5-sass@1.0.0',
    'fortawesome:fontawesome@4.4.0',
    'angular:angular@1.2.0',
    'urigo:angular@0.9.3',
    'aldeed:template-extension@3.4.3',
    'angularui:angular-ui-router@0.2.0',
    'urigo:angular-ui-router@0.7.0',
    'aldeed:collection2@2.3.3',
    'aldeed:autoform@4.0.0 || 5.0.0',
    'alanning:roles@1.2.13',
    'donchess:autoform-froala@0.0.2',
    'templating',

  ], 'client');

  //Server dependencies
  api.use([

    'aldeed:collection2@2.3.3',
    'donchess:autoform-froala@0.0.2',
    'alanning:roles@1.2.13',

  ], 'server');
  //Generic dependecies
  api.addFiles([

    'both/bothcode.js',

  ]);
  //server
  api.addFiles([

    'server/servercode.js',

  ], 'server');
  //Templates
  api.addFiles(
    [
      'public/css/adminstyle.css',
      'client/templates/admin.ng.html',
      'client/templates/admindashboard.ng.html',
      'client/templates/adminallusers.ng.html',
      'client/templates/adminedituser.ng.html',
      'client/templates/adminnewuser.ng.html',
      'client/templates/addnewpage.ng.html'

    ], 'client');
  api.addFiles([

    'partials/admin.html',
    'partials/adminmenumain.html',
    'partials/admindashboard.html',
    'partials/addpage.html',
    //'partials/adminallusers.html',


  ], 'client');
  //this MUST be first
  api.addFiles('public/js/appinit.ng.js', 'client');
  //All our routes here please
  api.addFiles('public/js/routes.ng.js', 'client');
  // All controllers here please
  api.addFiles([

    'public/js/controllers/main.ng.js',
    'public/js/controllers/users/adminedituser.ng.js',
    'public/js/controllers/users/userviewall.ng.js',
    'public/js/controllers/users/adminaddnewuserCtrl.ng.js',
    'public/js/controllers/pages/AdminAddNewPageCtrl.ng.js',

  ], 'client');
  //exports
  api.export([
    'Roles',
    'Pages',
    ],['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vimes1984:foundation-angular-admin');
  api.addFiles('foundation-angular-admin-tests.js');
});
