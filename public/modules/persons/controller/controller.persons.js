/**
 * Created by IOSoftwareSAS on 09/08/2016.
 */
  angular
      .module('com.module.persons')
      .controller('PersonsCtrl', function($scope) {
        $scope.politics = [
          { nom: 'François Fillon', twitterId: 'FrancoisFillon' },
          { nom: 'Nicolas Sarkozy', twitterId: 'NicolasSarkozy' },
          { nom: 'Jean-Luc Mélenchon', twitterId: 'JLMélenchon' },
          { nom: 'François Hollande', twitterId: 'fhollande' }]
      });


