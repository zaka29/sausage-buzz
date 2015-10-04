(function() {
  'use strict';

  angular
    .module('sausageBuzz')
    .factory('FBcommunication', FBcommunication);

  /** @ngInject */
  function FBcommunication($log, $q, $facebook) {

    console.log('$facebook');
    console.log($facebook);

    var service = {
        getUser: getUser,
        wathcLoginChange: wathcLoginChange
    }

    return service;

    function getUser() {
        // decorate the $http promise by accessing .data straight away
        console.log('get user');
        var deferred = $q.defer();
        $facebook.api('/me').then(function(response) {
            console.log('log reponse');
            console.log(reponse);
            if (!response || response.error) {
                deferred.reject('Error occured');
            } else {
                deferred.resolve(response);
            }
        });
        
        return deferred.promise;
    }

    function wathcLoginChange(argument) {
      
      var _self = this;

      FB.Event.subscribe('auth.authResponseChange', function(res) {
        if (res.status === 'connected') {
          /* 
           The user is already logged, 
           is possible retrieve his personal info
          */
          _self.getUserInfo();
          /*
           This is also the point where you should create a 
           session for the current user.
           For this purpose you can use the data inside the 
           res.authResponse object.
          */

        } else {
            /*
             The user is not logged to the app, or into Facebook:
             destroy the session on the server.
            */
        }
      });
    }

    function logout() {
      var deferred = $q.defer();
      FB.logout(function(response) {
          if (!response || response.error) {
              deferred.reject('Error occured');
          } else {
              deferred.resolve(response);
          }
      });
      return deferred.promise;
    }
  }

})();
