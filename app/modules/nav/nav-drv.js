angular.module('navMod', [])
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: '/tvnewssales/app/modules/nav/nav.html'
		};
	});