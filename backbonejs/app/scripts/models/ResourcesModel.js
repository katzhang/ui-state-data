var Resources = Backbone.Model.extend({
	defaults: {
		gold: 0,
		supply: 0
	}

	// incrementUnit: function(unit) {
	// 	var count = unit.get('count');
	// 	var cost = unit.get('cost');
	// 	var gold = this.get('gold');
	// 	var supply = this.get('supply');

	// 	if(canIncrement(cost, count, gold, supply)) {
	// 		this.set('gold', gold - cost);
	// 		this.set('supply', --supply);
	// 	}
	// },

	// decrementUnit: function(unit) {
	// 	var cost = unit.get('cost');
	// 	var gold = this.get('gold');
	// 	var supply = this.get('supply');
	// 	var count = unit.get('count');

	// 	if(canDecrement(cost, count, gold, supply)) {
	// 		this.set('gold', gold + cost);
	// 		this.set('supply', ++supply);
	// 	}
	// }
});