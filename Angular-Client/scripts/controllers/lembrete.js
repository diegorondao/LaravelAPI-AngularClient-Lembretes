'use strict';

angular.module('Client')
	.controller('IndexLembreteCtrl', function(){})
	

	.controller('CreateLembreteCtrl', function ($scope, LembreteResource){
		$scope.title= "Criar Novo Lembrete";
		$scope.button= "Guardar";
		$scope.Lembrete= {};
		$scope.saveLembrete = function(){
			//console.log($scope.Lembrete);
			LembreteResource.save($scope.Lembrete);
		};
	});