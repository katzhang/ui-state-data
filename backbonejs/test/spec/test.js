/* global describe, it */

(function () {
    'use strict';

    describe('unit collection', function () {
        it('is an instance of Backbone.Model', function() {
        	var unitCollection = new UnitCollection();
        	expect(unitCollection).to.be.instanceof(Backbone.Collection);
        })
    });
})();
