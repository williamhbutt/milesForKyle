'use strict';

var APP = window.APP = window.APP || {};

APP.registration = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.registration');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
