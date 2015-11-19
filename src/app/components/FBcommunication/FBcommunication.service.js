(function() {
  'use strict';

  angular
    .module('sausageBuzz')
    .factory('FBcommunication', FBcommunication);

  /** @ngInject */
  function FBcommunication($log, $q, $facebook) {
    
    var service = {
        getUserEvents: getUserEvents
    }

    return service;

    function getUserEvents (user) {
      var deferred = $q.defer();
      $facebook.api('/me/events').then( 
        function(response) {
          console.log('Event data be here');
          console.log(response);
          deferred.resolve(response);
        },
        function(err) {
          vm.welcomeMsg = "Please log in";
          deferred.reject(err);
        });
      return deferred.promise;
    }
  }
  
})();
