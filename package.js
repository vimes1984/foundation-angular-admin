Package.describe({
  name: 'vimes1984:foundation-angular-admin',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Installs an admin ui using zurb',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('foundation-angular-admin.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vimes1984:foundation-angular-admin');
  api.addFiles('foundation-angular-admin-tests.js');
});
