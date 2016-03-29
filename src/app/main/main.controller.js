(function() {
  'use strict';

  angular
    .module('sausageBuzz')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $facebook, FBcommunication) {
    var vm = this;

    vm.isLoggedIn = false;
    vm.login = login;
    vm.logout = logout;
    vm.refresh = refresh;
    vm.user = {};
    vm.userEvents = [];
    

    function login() {
      $facebook.login().then(function(data) {
        vm.refresh();
      });
    }
    
    function logout() {
      $facebook.logout().then(function(data) {
        vm.refresh();
      });
    }

    function refresh() {
      $facebook.api("/me").then( 
        function(response) {
          vm.user = response;
          vm.isLoggedIn = true;
          // refresh events list
          FBcommunication.getUserEvents(vm.user)
            .then(function(events){
              console.log('// events')
              console.log(events)
              vm.userEvents = events.data;
            });
        },
        function(err) {
          console.log('// err');
          console.log(err)
          vm.welcomeMsg = "Please log in";
        });
    }
    
  }
})();
