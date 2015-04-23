angular.module('scriptsMod')
	.directive('scripts', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/scripts/scripts.html',
			controller: 'ScriptsController',
			controllerAs: 'scripts',
		};
	});