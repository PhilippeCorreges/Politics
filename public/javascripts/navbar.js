/**
 * Created by IOSoftwareSAS on 08/08/2016.
 */
(function() {
  'use strict';
  angular.module('Twitter', ['ngMaterial','ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', AppCtrl);
  function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  }
})();