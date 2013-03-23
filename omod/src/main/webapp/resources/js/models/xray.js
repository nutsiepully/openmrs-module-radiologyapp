
define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    var Xray = Backbone.Model.extend({

        url: function() {
            var base = 'xrays';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        },

        toString: function() {
            str = ''
            _.each(this.attributes, function( value, key ) { str = str + ', ' + key + ' => ' + value; } );
            return str;
        }

    });

    return Xray;

});
