(function() {
  'use strict';

  angular
    .module('sausageBuzz')
    .config(config);

  /** @ngInject */
  function config($logProvider, $facebookProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // FB config
    $facebookProvider.setCustomInit({
      appId: '658682964266918',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.5'
    });
    $facebookProvider.setPermissions("user_events,rsvp_event");
  }

})();
