/**
 * Created by IOSoftwareSAS on 09/08/2016.
 */
(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name com.module.core.directive:liste
   * @description
   * # liste
   */
  angular
      .module('com.module.core')
      .directive('liste', function () {
        return {
          template: "<ul><li ng-repeat='item in politics track by $index'>"+
          '{{ politic.nom }}' +
          "</li></ul>",
          restrict: 'E',
          link: function () {}
        };
      });

})();
