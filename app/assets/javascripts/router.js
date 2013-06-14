$(document).ready(function () {
	var routes = {
		"click_counter": clickCounter,
		"one_page": onePage,
		"make_a_dude": makeADude,
		"keep_it_up": keepItUpGame,
		"view_graph": viewGraph
	}
	var route = window.location.pathname.replace(/^\//, '').replace(/\/.*/, '');
	routes[route]();
});