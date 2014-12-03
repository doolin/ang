//angular.module('myApp', [])
app = angular.module('myApp', [])
app.controller('MyController', function($scope, $timeout) {
  $scope.clock = {}
  var updateClock = function() {
    $scope.clock.now = new Date();
    $timeout(function() {
      updateClock();
    }, 1000);
  }
  updateClock();

  $scope.person = {
    name: "Dave D"
  };
});


//var app = angular.module('app', []);
//var app = angular.module('myApp', []);
app.controller('FirstController', function($scope) {
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.subtract = function(amount) { $scope.counter -= amount; };
});

app.controller('SSController', function($scope) {
  $scope.AF = 0
  //console.log($scope.ER);
});

app.controller('ParentController', function($scope) {
  // There is an error in the book here on page 31.
  $scope.person = { greeted: false };
});

app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.name = "Dave D";
  }
});


// Page 34, this one doesn't work either.
app.controller('ParseController',
function($scope, $parse) {
  $scope.$watch('expr', function(newVal, oldVal, scope) {
    if (newVal !== oldVal) {
      var parseFun = $parse(newVal);
      $scope.parsedValue = parseFun(scope);
    }
  });
});

app.controller('InterpolatorController',
  function($scope, $interpolate) {
    $scope.$watch('emailBody', function(body) {
      if (body) {
        var template = $interpolate(body);
        $scope.previewText =
          template({to: $scope.to});
      }
    });
  });
