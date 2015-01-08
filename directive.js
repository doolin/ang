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
})
.directive('myDirective3', function() {
  return {
    restrict: 'AEC',
    replace: true,
    scope: {
      myUrl: '@',
      myLinkText: '@'
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  }
})
.directive('myDirective4', function() {
  return {
    restrict: 'AEC',
    replace: true,
    scope: {
      myUrl: '=someAttr',
      myLinkText: '@'
    },
    template: '\
    <div>\
      <label>My URL Field:</label>\
      <input type="text"\
        ng-model="myUrl" />\
      <a href="{{myUrl}}">{{myLinkText}}</a>\
    </div>\
    '
  }
});
