'use strict';

angular.module('Client')
	.factory('LembreteResource', function($resource){
			return $resource("http://localhost:8000/lembretes/:id",{ 
				id: "@id"
			}, {
				update:{
					method: "PUT"
			}
		});			
	});