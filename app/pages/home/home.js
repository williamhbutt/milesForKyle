'use strict';

var APP = window.APP = window.APP || {};

APP.home = (function(){

    var bindEventsToUI = function() {
        $('.js-toggle-nav').click(function(e) {
            e.preventDefault();

            if ($('.nav').hasClass('active')) {
                $('.nav').slideUp().removeClass('active');
            } else {
                $('.nav').slideDown().addClass('active');
            }
        });
    };

    var init = function() {
        console.log('APP.home');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
