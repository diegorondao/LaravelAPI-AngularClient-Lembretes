'use strict';

angular.module('Client')
	.controller('IndexLembreteCtrl', function($scope, LembreteResource, $location, $timeout){
		$scope.Lembretes = LembreteResource.query();

		$scope.removeLembrete = function(id) {
			LembreteResource.delete({
				id: id
			});
			Materialize.toast('Lembrete Apagado.', 2000, 'green accent-4');
			$timeout(function() {
				$location.path('/lembretes');
			}, 1000);
		};
	})
	.controller('CreateLembreteCtrl', function($scope, LembreteResource, $location, $timeout) {
		$scope.title = "Gravar Lembrete";
		$scope.button = "Gravar";
		$scope.Lembretes = {};
		$scope.saveLembrete = function() {
			LembreteResource.save($scope.Note);
			Materialize.toast('Lembrete Criado.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/lembretes');
			}, 1000);
		};
	})
	.controller('EditLembreteCtrl', function($scope, LembreteResource, $location, $timeout, $routeParams) {
		$scope.title = "Editar Nota";
		$scope.button = "Atualizar";
		$scope.Lembretes = LembreteResource.get({
			id: $routeParams.id
		});

		$scope.saveLembrete = function() {
			LembreteResource.update($scope.Note);
			Materialize.toast('Atualizada.', 5000, 'green accent-4');
			$timeout(function() {
				$location.path('/lembretes');
			}, 1000);
		};
	});
	