'use strict';

angular.module('Client',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/lembretes',{
				templateUrl: 'views/lembretes/index.html',
				controller: 'IndexLembreteCtrl'
		})
		.otherwise({
			redirectTo: '/'

		});
	});