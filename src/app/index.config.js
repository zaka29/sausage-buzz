(function() {
  'use strict';

  angular
    .module('sausageBuzz')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $facebookProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    // FB config
    $facebookProvider.setCustomInit({
      appId: '658682964266918',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
  }

})();
