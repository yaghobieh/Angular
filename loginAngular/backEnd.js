var controllerApp = angular.module('mainApp', ['ngRoute']);

controllerApp.config(function($routeProvider){

      $routeProvider
      .when('/login', {
				templateUrl : 'pages/loginForm.html',
				controller  : 'controlCenter'
			})
      .when('/verify', {
        templateUrl: 'pages/welcome.html'
      })
      .otherwise({
        redirectTo: '/login'
      })

});

controllerApp.controller('controlCenter', function($scope, $location){

  $scope.verify = function(){

      if ( $scope.username == 'admin' && $scope.password == 'admin') {
        $location.path('/verify');
      }else{
        alert('Wrong');
      }

  };
});

controllerApp.directive('loginForm', function(){
      return { templateUrl: 'pages/loginBoot.html' }
    });
