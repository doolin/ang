angular.module('myApp', [])
.directive('myDirective', function() {
  return {
    restrict: 'E',
    template: '<a href="http://google.com">Click me to go to Google</a>'
  }
})
.directive('myDirective2', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<a href="http://google.com">Click me to go to Google</a>'
  }
});
