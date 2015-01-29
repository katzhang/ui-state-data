var Unit = Backbone.Model.extend({
	defaults: {
		name: null,
		cost: 0,
		count: 0
	},
	incrementCount: function() {
		var count = this.get('count');
		if((count + 1) <= data.resources.supply) {
			count++;
			this.set('count', count);
		}
	},
	decrementCount: function() {
		var count = this.get('count');
		if (count > 0) {
			count--;
			this.set('count', count);
		}
	}
});