//Determine based on unit's cost and count and resources
//if the unit can be added
function canIncrement(cost, count, gold, supply) {
	var result = false;
	if(
		(gold - cost) >= 0
		&& ((supply - 1) >= 0)
	) {
		result = true;
	}

	console.log('can increment: ' + result);

	return result;
};

function canDecrement(cost, count, gold, supply) {
	var result = false;
	if(
		count > 0
		&& (gold + cost) <= data.resources.gold
		&& (supply + 1) <= data.resources.supply
	) {
		result = true;
	}

	console.log('can decrement: ' + result);

	return result;
};


var resources = new Resources(data.resources);
var unitCollection = new UnitCollection(data.unitTypes);

_.each(unitCollection.models, function(unit) {
	var view = new UnitView({model: unit}).render().el;
	$('.unit-list').append(view);
});

var resourcesView = new ResourcesView({model: resources}).render().el;
$('.container').append(resourcesView);
