var Unit = Backbone.Model.extend({
	defaults: {
		name: null,
		cost: 0,
		count: 0
	},
	incrementCount: function() {
		var count = this.get('count');
		var cost = this.get('cost');
		var gold = resources.get('gold');
		var supply = resources.get('supply');

		if(canIncrement(cost, count, gold, supply)) {
			count++;
			this.set('count', count);
		}
	},
	decrementCount: function() {
		var count = this.get('count');
		var cost = this.get('cost');
		var gold = resources.get('gold');
		var supply = resources.get('supply');

		if (canDecrement(cost, count, gold, supply)) {
			count--;
			this.set('count', count);
		}
	}
});