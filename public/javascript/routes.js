angular.module('TackingStory')
.config(function ($routeProvider) {
  $routeProvider.when('/stories', {
    templateUrl: '/templates/pages/stories/index.html',
    controller: 'BoardController'
  })
  .when('/users', {
    templateUrl: '/templates/pages/users/index.html'
  })
  .when('/story/new', {
    templateUrl: '/templates/pages/stories/new.html'
  })
  .when('/', {
    templateUrl: '/templates/pages/stories/index.html',
    controller: 'BoardController'
  })
  .otherwise({redirectTo: '/'});
});