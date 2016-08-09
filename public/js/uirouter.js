/**
 * Created by IOSoftwareSAS on 08/08/2016.
 */
var app = angular.module('Twitter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.deferIntercept();
  $urlRouterProvider.otherwise('/home');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
      })

      // nested list with custom controller
      .state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function($scope) {
          $scope.politics = ['François Fillon', 'François Hollande', 'Nicolas Sarkozy'];
          $scope.urls = ['/fillon', '', ''];
        }
      })

      // nested list with just some random string data
      .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
      })

      // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('fillon', {
        url: '/fillon',
        templateUrl: 'fillon.html'
        // we'll get to this in a bit
      });
});