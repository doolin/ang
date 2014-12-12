app = angular.module('myApp', []);

app.controller('FilterDemoController', function($scope) {
  $scope.isCapitalized =
    function(str) { return str[0] == str[0].toUpperCase(); }
  });

  // example on page 45 doesn't work with what I have so far
angular.module('myApp.filters', [])
  .filter('capitalize', function() {
    return function(input) {
      if (input)
        return input[0].toUpperCase() +
          input.slice(1);
    }
  });


