angular.module('TackingStory')
.controller('BoardController', ['$scope', 'BoardFactory', function($scope, BoardFactory){
  $scope.boards = BoardFactory.all();
}]);
