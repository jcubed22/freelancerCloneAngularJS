freelanceApp.controller('fancyCtrl', function fancyCtrl($scope) {
  $scope.myInterval = 5000;
   $scope.noWrapSlides = false;
   var slides = $scope.slides = [{image: "/../images/dragon_monk.jpg"}, {image: "/../images/dragon_wizard.jpg"}, {image: "/../images/eyes.jpg"}, {image: "/../images/skull_wizard.jpg"},];

   $scope.testImages = [{image: "/../images/dragon_monk.jpg", caption: "Caption", info: "information"}, {image: "/../images/dragon_wizard.jpg", caption: "Caption", info: "information"}, {image: "/../images/eyes.jpg", caption: "Caption", info: "information"}, {image: "/../images/skull_wizard.jpg", caption: "Caption", info: "information"}];

});
