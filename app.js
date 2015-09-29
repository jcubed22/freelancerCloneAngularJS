var freelanceApp = angular.module("freelanceApp", ['ui.router', 'ngAnimate', 'ui.bootstrap']);

freelanceApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: "",
    views: {
      "header": {
        templateUrl: "partials/header.html",

      },
      "body": {
        templateUrl: "partials/home.html",
        controller: "fancyCtrl"
      }
    }
  })
});
