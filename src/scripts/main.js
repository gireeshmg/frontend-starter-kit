/*jshint esversion: 6, forin: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * Main.js
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
GAF.Main = (function(window, $, namespace) {
    'use strict';

    // public methods
    let init,

        // private methods
        _main,

        // properties
        $wrapper = null,
        some_class = '.some-class';


    _main = () => {
        console.log('main');
        $('.cta').on('click', () => {
            console.log('click');
        });

        $('.demo.items .image img').visibility({
            type: 'image',
            transition: 'fade in',
            duration: 1000
        });
    };

    init = () => {
        console.log('init');
        _main();
    };

    return {
        init: init
    };
}(this, jQuery, 'GAF'));

jQuery(document).ready(function() {
    jQuery(GAF.Main.init());
});
