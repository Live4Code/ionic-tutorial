// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('movie', ['ionic', 'movie.services', 'movie.controllers'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
  
  .state('movie-index', {
    url: '/movies',
    templateUrl: 'templates/movie-index.html',
    controller: 'MovieHomeCtrl'
  })

  .state('movie-detail', {
    url: "/movie/:title",
    templateUrl: "templates/movie-detail.html",
    controller: "MovieDetailCtrl",
    resolve: {
      movie: ['MovieService','$stateParams', function(MovieService, $stateParams){
  
        //use the title attribute from $stateParams to locate movie
        //complete code below
        return null;


      }]
    }
  }) 
  
  ;
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/movies');   
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

;


