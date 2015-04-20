angular.module('headerMod', [])
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/tvnewssales/app/modules/header/header.html'
		};
	});