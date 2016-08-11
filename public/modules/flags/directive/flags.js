/**
 * Created by IOSoftwareSAS on 10/08/2016.
 */
/**
 * Created by IOSoftwareSAS on 09/08/2016.
 */
(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name com.module.flags.directive:flag
   * @description
   * # liste
   */
  angular
      .module('com.module.flags')
      .directive('flag', function() {
        return {
          restrict: 'E',
          replace: true,
          template: '<span class="f{{ size }}"><span class="flag {{ country }}"></span></span>',
          scope: {
            country: '@',
            size: '@'
          },
          link: function(scope, elm, attrs) {
            // Default flag size
            scope.size = 16;

            scope.$watch('country', function(value) {
              scope.country = angular.lowercase(value);
            });

            scope.$watch('size', function(value) {
              scope.size = value;
            });
          }
        };
      });

})();