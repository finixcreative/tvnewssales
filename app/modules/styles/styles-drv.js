angular.module('stylesMod')
	.directive('styles', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/styles/styles.html',
			controller: 'StylesController',
			controllerAs: 'styles',
		};
	});