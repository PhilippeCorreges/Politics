/**
 * Created by IOSoftwareSAS on 09/08/2016.
 */

(function () {
  'use strict';
  angular
  .module('com.module.core')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('presentation', {
        url: '/presentation',
        templateUrl: 'modules/core/views/partial-home.html'
      })

      // nested list with custom controller
      .state('presentation.liste', {
        url: '/liste',
        templateUrl: 'modules/persons/views/persons-list.html',

      })

      // nested list with just some random string data
      .state('presentation.statistiques', {
        url: '/statistiques',
        templateUrl: 'modules/statistics/views/statistiques.html'
      })

      // Fillon PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('twits', {
        url: '/viewTwits/:twitterId',
        templateUrl: 'modules/twitter/views/twitsView.html',
        controller:'TwitCtrl'
        });
});
})();