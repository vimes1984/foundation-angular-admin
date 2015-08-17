/*Global*/
Package.describe({
  name: 'vimes1984:foundation-angular-admin',
  version: '0.0.8',
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
  api.use('angular:angular@1.2.0', 'client'); // Dependencies
  api.use('aldeed:template-extension@3.4.3', 'client'); // Dependencies
  api.use('urigo:angular@0.9.3', 'client');
  api.use('angularui:angular-ui-router@0.2.0', 'client');
  api.use('urigo:angular-ui-router@0.7.0', 'client');
  api.use('templating', 'client');
  api.addFiles('client/templates/admin.ng.html');
  api.addFiles('partials/admin.html');
  api.addFiles('public/js/appinit.ng.js', 'client');
  api.addFiles('public/js/routes.ng.js', 'client');
  api.addFiles('public/js/controllers.ng.js', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vimes1984:foundation-angular-admin');
  api.addFiles('foundation-angular-admin-tests.js');
});
