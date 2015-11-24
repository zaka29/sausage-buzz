(function() {
  'use strict';

  angular
    .module('sausageBuzz')
    .directive('eventFb', eventFb);

  /** @ngInject */
  function eventFb() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/event/event.html',
      scope: {
          userEvent: '='
      },
      controller: EventController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function EventController() {
      var vm = this;
      vm.convertDate = convertDate;
      // "vm.creation" is a vaible by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();

      function convertDate(dateString){
        var date = new Date(dateString);
        return date.toDateString();
      }

    }
  }

})();
