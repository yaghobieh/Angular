angular.module('diractoryApp', ['ngAnimate', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'topControl as thisDir'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'bankMain.html'
      });
    })

    .controller('topControl', function(){

      var thisDir = this;
      thisDir.toggle = false;

      thisDir.list=[{name: 'Allen Moinoer', amount: 250000, img: 's.jfif'},
                   {name: 'Sharon Back', amount: 22000, img: 's3.jfif'},
                   {name: 'Goren nisim', amount: 14000, img: 's1.jpg'},
                   {name:'Scott', amount: 13000, img: 's1.jpg'}];

      thisDir.addAcount = function(){
        thisDir.list.push({name: thisDir.name, amount: thisDir.amount, img: thisDir.img});
        thisDir.name='';
        thisDir.age = '';
      }

    })

    .directive('helloWorld', function(){
      return { templateUrl: 'people.html' }
    });
