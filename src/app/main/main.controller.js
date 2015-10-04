(function() {
  'use strict';

  angular
    .module('sausageBuzz')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, malarkey, FBcommunication) {
    var vm = this;
    console.log('// fb');
    console.log(window.FB);
    
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1441190211733;
    vm.showToastr = showToastr;
    vm.isLoggedIn = false;
    vm.login = login;
    vm.refresh = refresh;
    activate();

    
    
    function login() {
      $facebook.login().then(function() {
        refresh();
      });
    }
    
    function refresh() {
      $facebook.api("/me").then( 
        function(response) {
          vm.welcomeMsg = "Welcome " + response.name;
          vm.isLoggedIn = true;
        },
        function(err) {
          vm.welcomeMsg = "Please log in";
        });
    }

    function activate() {
      getWebDevTec();
      
      FBcommunication.getUser().then(function(response){
        console.log('// FB response');
        console.log(response);
      });

      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
