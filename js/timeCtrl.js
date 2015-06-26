angular.module('pland', []).controller('todoCtrl', function($scope){
  var updateTime;
  $scope.date = {};

  updateTime = function() {
    $scope.date.raw = new Date();
    $timeout(updateTime, 1000);
  };
  return updateTime();
});