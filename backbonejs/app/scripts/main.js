var unitCollection = new UnitCollection(data.unitTypes);
var resources = new Resources(data.resources);

_.each(unitCollection.models, function(unit) {
	var view = new UnitView({model: unit}).render().el;
	$('.unit-list').append(view);
});

var resourcesView = new ResourcesView({model: resources}).render().el;
$('.container').append(resourcesView);
