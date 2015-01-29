var Resources = Backbone.Model.extend({
	defaults: {
		gold: 0,
		supply: 0
	},

	incrementUnit: function(unit) {
		var cost = unit.get('cost');
		var gold = this.get('gold');
		var supply = this.get('supply');

		//TODO: validate that gold and supply are never negative
		if(((gold - cost) >= 0) && ((supply - 1) >= 0)) {
			this.set('gold', gold - cost);
			this.set('supply', --supply);
		}
	},

	decrementUnit: function(unit) {
		var cost = unit.get('cost');
		var gold = this.get('gold');
		var supply = this.get('supply');
		var count = unit.get('count');

		if(((gold + cost) <= data.resources.gold) && ((supply + 1) <= data.resources.supply)) {
			this.set('gold', gold + cost);
			this.set('supply', ++supply);
		}
	}
});