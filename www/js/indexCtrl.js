var app = angular.module('myApp', ['ngMaterial'])
app.controller('myController', function($scope, $mdSidenav) {
    $scope.test = 'working';
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
});