'use strict';

angular.module('Client')
	.controller('IndexLembreteCtrl', function($scope, LembreteResource, $location, $timeout){
		$scope.Lembretes = LembreteResource.query();

		$scope.RemoveLembrete = function(id) {
			LembreteResource.delete({
				id: id
			});
			Materialize.toast('Lembrete Apagado.', 2000, 'green accent-4');
			$timeout(function() {
				$location.path('/lembretes');
			}, 1000);
		};



	})
	.controller('CreateLembreteCtrl', function ($scope, LembreteResource){
		$scope.title= "Criar Novo Lembrete";
		$scope.button= "Guardar";
		$scope.Lembretes= {};
		$scope.saveLembrete = function(){
			LembreteResource.save($scope.Lembretes);
		};
	});