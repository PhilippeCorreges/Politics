/**
 * Created by IOSoftwareSAS on 09/08/2016.
 */
  angular
      .module('com.module.persons')
      .controller('PersonsCtrl', function($scope) {
        $scope.politics = [
          { nom: 'François Fillon', lien :'/fillon', twitter: 'FrancoisFillon' },
          { nom: 'Nicolas Sarkozy', lien :'', twitter: '' },
          { nom: 'Jean-Luc Mélenchon', lien :'', twitter: '' }]
      });


