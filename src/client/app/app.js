(function() {
'use strict';
angular.module('ilovevideo', [
	'ui.router',
	'ui.scroll',
	'vjs.video'
]).config(function($stateProvider, $urlRouterProvider) {
	// ROUTING with ui.router
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	// this state is placed in the <nav-view> in the index.html
		.state('home', {
		url: '/home',
		templateUrl: 'modules/home/home.html',
		controller: 'HomeCtrl as ctrl'
	})
});
})();
