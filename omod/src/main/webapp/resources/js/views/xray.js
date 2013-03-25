
define([
    'jquery',
    'underscore',
    'backbone',
    'radiologyApp/views/xray',
    'text!radiologyApp/templates/xray.html'
], function( $, _, Backbone, XrayView, XrayTemplate ) {

    var XrayView = Backbone.View.extend({

        el: '.hero-unit',

        events: {
            'click #xray-create': 'save'
        },

        template: _.template( XrayTemplate ),

        initialize: function() {
            this.listenTo( this.collection, 'all', this.render );
            this.render();
        },

        render: function() {
            this.$el.html( this.template() );

            $('#xray-list').html('');
            this.collection.each( function( xray ) {
                $('#xray-list').append( '<li>' + xray.toString() + '</li>' );
            });

            return this;
        },

        modelFromInterface: function() {
            return {
                patientId: this.$('[name=patientId]').val(),
                notes: this.$('[name=notes]').val(),
                timing: this.$('[name=timing]').val(),
                portable: this.$('[name=portable]').val()
            };
        },

        save: function() {
            this.collection.create( this.modelFromInterface() );
        }

    });

    return XrayView;

});
