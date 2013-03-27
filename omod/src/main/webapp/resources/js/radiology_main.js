
function getParameterByName(name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

require([
//    '/openmrs/moduleResources/uicommons/scripts/main.js'
    '../../uicommons/scripts/main'
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
        'backbone',
        'radiologyApp/routers/router',
        'uiCommons/openmrs/extensions/extensionRenderer'
    ], function ( Backbone, Router, ExtensionRenderer ) {

        var router = new Router();
        Backbone.history.start();

        new ExtensionRenderer().renderExtensions(
            'radiologyApp', 'patientLinks', '#patientLinks',
            {xrayConceptId : '34', 'patientId' : '2' });
    });

});