/*jshint esversion: 6, forin: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * Util.js
 *
 *
 * @project:    GAF
 * @date:       2016-10-24
 * @author:     SAPIENNITRO
 * @licensor:   SAPIENNITRO
 * @namespaces: GAF
 *
 */

let GAF = window.GAF || {};
GAF.Util = (function(window, $, namespace) {
    'use strict';

    // public methods
    let init,

        // private methods
        _util,

        // properties
        $wrapper = null,
        some_class = '.some-class';


    _util = () => {
        console.log('util');
    };

    init = () => {
        console.log('init');
        _util();
    };

    return {
        init: init
    };
}(this, jQuery, 'GAF'));

jQuery(GAF.Util.init());
