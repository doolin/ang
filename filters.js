app = angular.module('myApp', []);

app.controller('FilterDemoController', function($scope) {
  $scope.isCapitalized =
    function(str) { return str[0] == str[0].toUpperCase(); }
  });
