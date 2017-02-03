var ctrl = angular.module('todoApp' , []);
ctrl.controller('todoCtrl', function($scope){

  $scope.taskesList = [];
  var taskLocalstorange = localStorage['listOfTasksLocal'];

  if ( taskLocalstorange != undefined ){
    $scope.taskesList = JSON.parse(taskLocalstorange);
  }

  $scope.addTask = function (){
    $scope.taskesList.push({name: $scope.titleDo, contents: $scope.contents, status: false});
    localStorage['listOfTasksLocal'] = JSON.stringify($scope.taskesList);
    $scope.titleDo = '';
    $scope.contents = '';
    $scope.statusOf = '';
  }

  $scope.changeEditor = function(msg){
    event.target.contentEditable = event.target.contentEditable == 'false' ? 'true' : 'false';
  };

  $scope.exitFromedit = function(msg){
    if (event.which == 13 && msg != '' || event.click){
      for ( i= 0 ; i < $scope.taskesList.length ; i++){
        if ($scope.taskesList[i].name == msg ){
          $scope.taskesList[i].name = event.target.innerText;
          console.log($scope.taskesList);
          localStorage['listOfTasksLocal'] = JSON.stringify($scope.taskesList);
        }
      }
      $scope.changeEditor(msg);
    }
  }

});

ctrl.directive('containInfo', function(){
      return { 
		templateUrl: 'pages/containAll.html', 
		//restrict: 'A' --> We restrict it to A- attributes or E- Elemente
		//<p contain-info></p> <-- A and E <contain-info></contain-info> And boot of them EA
	  }
    });
