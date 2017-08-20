var app = angular.module('myAppX', []);

app.controller('ctrlX', function($scope) {
    $scope.showDetails = false;
    $scope.showDetail = function() {
        $scope.showDetails = !$scope.showDetails;
    }
});