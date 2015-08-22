angular.module('adminui', [ 'angular-meteor', 'ui.router']);
angular.module('adminui').config([
  '$interpolateProvider',
  function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }
]);
