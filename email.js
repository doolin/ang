angular.module('emailParser', [])
  .config(['$interpolateProvider',
  function($interpolateProvider) {
    $interpolateProvider.startSymbol('__');
    $interpolateProvider.endSymbol('__');
  }])
  .factory('EmailParser', ['$interpolate',
    function($interpolate) {
      // a service to handle parsing
      return {
        parse: function(text, context) {
          var template = $interpolate(text);
          return template(context);
        }
    }
  }]);

app = angular.module('myApp', ['emailParser']);

app.controller('InterpolatorController',
  function($scope, EmailParser) {
    $scope.$watch('emailBody', function(body) {
      if (body) {
        $scope.previewText =
          EmailParser.parse(body, {
          to: $scope.to
        });
      }
    });
  });
