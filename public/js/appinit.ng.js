angular.module('adminui', [ 'angular-meteor', 'ui.router', 'textAngular']);
angular.module('adminui').config([
  '$interpolateProvider',
  function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }
]);
Template.registerHelper('site',
function(){
  return Site.find({}).fetch()[0];
});
Template.registerHelper('logo',
function(){
  var imageid = Site.find({}).fetch()[0];
  var logo = Images.find({_id: imageid.sitelogo}).fetch()[0];
  console.log(logo.copies.images.name);
  return logo.copies.images.name;
});
