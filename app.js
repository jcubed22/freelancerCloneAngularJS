var freelanceApp = angular.module("freelanceApp", ['ui.router']);

freelanceApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: "",
    views: {
      "header": {
        templateUrl: "partials/header.html",

      },
      "body": {
        templateUrl: "partials/home.html"
      }
    }
  })
});
