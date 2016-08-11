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
        views: {
          'header':{
            template:'header <hr />'
          },
          'content': {
            template: '<div ui-view></div>',
            url: '/presentation',
            templateUrl: 'modules/core/views/partial-home.html'
          },
          'footer': {
            template: '<hr /> footer'
          }
        },

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
      .state('fillon', {
        url: '/fillon',
        templateUrl: 'modules/twitter/views/fillon.html',
        controller:'TwitCtrl'
      });
});
})();