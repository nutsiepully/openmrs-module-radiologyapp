
define([
    'jquery',
    'underscore',
    'backbone',
    'radiologyApp/collections/xrays',
    'radiologyApp/views/xray'
], function( $, _, Backbone, xrayCollection, XrayView ) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            '*path': "xray"
        },

        xray: function() {
            new XrayView( {collection: xrayCollection} )
        }

    });

    return AppRouter;

});
