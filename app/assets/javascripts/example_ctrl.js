(function() {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {
    $scope.message = "Hello World!";
    $scope.reviews = ["It was awesome","i love it","its confusing"];

    $scope.addReview = function(newReview) {
      // if(newReview != null) {
        if(newReview){
      $scope.reviews.push(newReview);
      $scope.newReview = null;
    }
    }
    $scope.taskComplete = function(index) {
      $scope.reviews.splice(index,1);
    }

    $scope.isPositive = function(task) {
      return task.indexOf("stupid") === -1;
    }
    window.$scope = $scope;

  });
})();