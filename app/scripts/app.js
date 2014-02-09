'use strict';

angular.module('etsyProfitCalculatorApp', [
	'ngRoute'
])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})
.run(function($rootScope, $timeout) {
	$rootScope.$on('$viewContentLoaded', function () {
		$timeout(function(){        
			$(document).foundation();
		},300)
	});
});