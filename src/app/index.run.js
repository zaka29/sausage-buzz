(function() {
    'use strict';

    angular
        .module('sausageBuzz')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, $window, $q, FBcommunication) {

        // load the Facebook javascript SDK
        (function(d) {
            var js,
                id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];

            if (d.getElementById(id)) {
                return;
            }

            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";

            ref.parentNode.insertBefore(js, ref);

        }(document));

    }

})();
