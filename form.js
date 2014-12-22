app = angular.module('myApp', []);

app.controller('FormDemoController',
  function($scope) {
  });

app.directive('ensureUnique', function($http) {
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function(n) {
        if (!n) return;
        $http({
          method: 'POST',
          url: '/api/check/'+attrs.ensureUnique,
          data: {
            field: attrs.ensureUnique,
            value: scope.ngModel
          }
        }).success(function(data) {
          c.$setValidity('unique', data.isUnique);
        }).error(function(data) {
          c.$setValidity('unique', false);
        });
      });
    }
  }
});

app.controller('signupController',
  function($scope) {
    $scope.submitted = false;
    $scope.signupForm = function() {
      if ($scope.signup_form.$valide) {
        // submit as normal
      } else {
        $scope.signup_form.submitted = true;
      }
    }
  });
