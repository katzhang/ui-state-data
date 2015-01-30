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
	},
	decrementCount: function(e) {
		e.preventDefault();
		this.model.decrementCount();
	}
});