'use strict';

angular.module('Client',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/lembretes',{
				templateUrl: 'views/lembretes/index.html',
				controller: 'IndexLembreteCtrl'
		})
		.when('/lembretes/new',{
				templateUrl: 'views/lembretes/create.html',
				controller: 'CreateLembreteCtrl'
		})
		.otherwise({
			redirectTo: '/'

		});
	});