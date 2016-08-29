'use strict';

angular.module('Client',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/lembretes',{
				templateUrl: 'views/lembrete/index.html',
				controller: 'IndexLembreteCtrl'
		})
		.when('/lembretes/new',{
				templateUrl: 'views/lembrete/create.html',
				controller: 'CreateLembreteCtrl'
		})
		.otherwise({
			redirectTo: '/'

		});
	});