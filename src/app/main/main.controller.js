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
    vm.userEvents = [{
      description: "Outdoor Winter Music Event↵↵Details to come...",
      end_time: "2016-06-26T16:00:00+1000",
      id: "757180467675760",
      name: "Frosty Fraptangle - 2016"
    }, {
      description: "Outdoor Winter Music Event↵↵Details to come...",
      end_time: "2016-06-26T16:00:00+1000",
      id: "757180467675760",
      name: "Frosty Fraptangle - 2016"
    }];

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
          vm.welcomeMsg = "Please log in";
        });
    }
    
  }
})();
