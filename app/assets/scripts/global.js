'use strict';

var APP = window.APP = window.APP || {};

APP.global = (function(){

    var initGlobalComponents = function() {
        APP.navigation.init();
        // APP.footer.init();
    };

    var initPageComponents = function() {
        APP.core.controller.init();
    };

    var init = function() {

        /**
        * initialize global components
        */
        initGlobalComponents();

        /**
        * initialize components for the current page
        */
        initPageComponents();
        //$("#2013results").tablesorter();

        //$("#gallery").owlCarousel({

            //autoPlay: 3000, //Set AutoPlay to 3 seconds

            //items : 2
            ////itemsDesktop : [1199,3],
            ////itemsDesktopSmall : [979,3]

        //});
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());

$( document ).ready( APP.global.init );
