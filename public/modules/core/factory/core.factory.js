(function () {
  'use strict';
  angular
      .module('com.module.core')
      .factory('ListePolitics',function() {

    return {
      list:function(){
        var politics = [{ nom: 'François Hollande', lien :'', twitter: '' },,
          { nom: 'François Fillon', lien :'/fillon', twitter: 'FrancoisFillon' },
          { nom: 'Nicolas Sarkozy', lien :'', twitter: '' },
          { nom: 'Jean-Luc Mélenchon', lien :'', twitter: '' }];
        return items
      }
    };
  })

});
