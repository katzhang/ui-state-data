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

var UnitView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#unit-template').html()),
	events: {
		'click .increment-count': 'incrementCount',
		'click .decrement-count': 'decrementCount'
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	incrementCount: function(e) {
		e.preventDefault();
		this.model.incrementCount();
		resources.incrementUnit(this.model);
	},
	decrementCount: function(e) {
		e.preventDefault();
		this.model.decrementCount();
		resources.decrementUnit(this.model);
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

var ResourcesView = Backbone.View.extend({
	template: _.template($('#resources-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var unitCollection = new UnitCollection(data.unitTypes);
var resources = new Resources(data.resources);

_.each(unitCollection.models, function(unit) {
	var view = new UnitView({model: unit}).render().el;
	$('.unit-list').append(view);
});

var resourcesView = new ResourcesView({model: resources}).render().el;
$('.container').append(resourcesView);
