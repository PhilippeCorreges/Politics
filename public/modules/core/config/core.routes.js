/**
 * Created by IOSoftwareSAS on 09/08/2016.
 */

(function () {
  'use strict';
  angular
  .module('com.module.core')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'modules/core/partial-home.html'
      })

      // nested list with custom controller
      .state('home.liste', {
        url: '/liste',
        templateUrl: 'modules/core/partial-home-list.html',

      })

      // nested list with just some random string data
      .state('home.statistiques', {
        url: '/statistiques',
        templateUrl: 'statistiques.html'
      })

      // Fillon PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('fillon', {
        url: '/fillon',
        templateUrl: 'fillon.html'
        // we'll get to this in a bit
      });
        $urlRouterProvider.otherwise('/home');
});
})();