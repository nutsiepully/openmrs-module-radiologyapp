
require([
//    '/openmrs/moduleResources/uiCommonsLibrary/scripts/main.js'
    '../../uiCommonsLibrary/scripts/main'
], function (main) {

    // Ensure main.js is loaded which sets up the main configuration.

    require.config({

        shim: {
            backbone: {
                deps: [
                    'underscore',
                    'jquery'
                ],
                exports: 'Backbone'
            },
            backboneLocalstorage: {
                deps: ['backbone'],
                exports: 'Store'
            }
        },

        paths: {
            backbone: 'lib/backbone/backbone',
            backboneLocalstorage: 'lib/backbone/backbone.localStorage',
            radiologyApp: '.'
        }
    });

    require([
        'radiologyApp/models/xray',
        'backbone',
        'underscore',
        'jquery'
    ], function ( Xray, Backbone, _, $ ) {

        console.log(Xray);
        console.log(Backbone);
        console.log(_);
        console.log($);

    });

});