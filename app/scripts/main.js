var data = {
	resources: {
		gold: 1500,
		supply: 10
	},
	unitTypes: [
		{
			name: 'footman',
			cost: 120
		},
		{
			name: 'archer',
			cost: 140
		},
		{
			name: 'pikeman',
			cost: 150
		},
		{
			name: 'knight',
			cost: 260
		}
	]
};

var Unit = Backbone.Model.extend({
	defaults: {
		name: null,
		cost: 0,
		count: 0
	},
	incrementCount: function() {
		var count = this.get('count');
		count++;
		this.set('count', count);
	},
	decrementCount: function() {
		var count = this.get('count');
		count--;
		this.set('count', count);
	}
});

var UnitCollection = Backbone.Collection.extend({
	model: Unit
});

var Resources = Backbone.Model.extend({
	defaults: {
		gold: 0,
		suppy: 0
	},

	incrementUnit: function(unit) {
		var cost = unit.get('cost');
		var gold = this.get('gold');
		var supply = this.get('supply');

		//TODO: validate that gold and supply are never negative
		this.set('gold', gold - cost);
		this.set('supply', --supply);
	},

	decrementUnit: function(unit) {
		var cost = unit.get('cost');
		var gold = this.get('gold');
		var supply = this.get('supply');

		this.set('gold', gold + cost);
		this.set('supply', ++supply);
	}

});

var unitCollection = new UnitCollection(data.unitTypes);
var resources = new Resources(data.resources);

$('.increment-button').on('click', function(e) {
	e.preventDefault();

	var unitName = $(this).attr('data-unit');
	var unit = unitCollection.where({name: unitName})[0];
	unit.incrementCount();
	resources.incrementUnit(unit);
	console.log(unitCollection);
	console.log(resources);

})
