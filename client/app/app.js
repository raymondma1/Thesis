angular.module('sceneit', [
  'ui.router',
  'sceneit.home',
  'sceneit.map',
  'sceneit.signin',
  'sceneit.signup',
  'sceneit.factories',
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html',
    controller: 'HomeController',
    data: {
      authenticate: false
    }
  });

  $stateProvider
  .state('map', {
    url: '/map',
    templateUrl: 'app/map/map.html',
    controller: 'MapController',
    data: {
      authenticate: false
    }

  });

 $stateProvider
  .state('signin', {
    url: '/signin',
    templateUrl: 'app/signin/signin.html',
    controller: 'SigninController',
    data: {
      authenticate: false
    }
  });

  $stateProvider
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/signup/signup.html',
    controller: 'SignupController',
     data: {
      authenticate: false
    }
  });
})

.run(function ($rootScope, AuthFactory) {
  $rootScope.$on("$stateChangeStart",function(event, nextState, toParams, fromState, fromParams){
    if(!AuthFactory.isAuthenticated() && nextState.data.authenticate){
      event.preventDefault();
    }
  })
});
