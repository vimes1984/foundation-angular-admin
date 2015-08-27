angular.module('adminui', [ 'angular-meteor', 'ui.router', 'textAngular']);
angular.module('adminui').config([
  '$interpolateProvider',
  function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }
]);
Template.body.helpers({
  site: function () {
    return Site.find({}).fetch()[0];
  }
});
