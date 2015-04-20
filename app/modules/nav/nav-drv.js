angular.module('navMod', [])
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/nav/nav.html'
		};
	});