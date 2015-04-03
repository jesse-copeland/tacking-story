angular.module('TackingStory')
.controller('BoardController', ['$scope', 'BoardFactory', function($scope, BoardFactory){
  $scope.boards = BoardFactory.all();

  $scope.flipCard = function ($event) {
    $($event.currentTarget).closest('.flip-container').toggleClass('flip'); 
  };

}]);
