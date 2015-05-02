angular.module('copyrightMod', [])
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: '/tvnewssales/app/modules/copyright/copyright.html'
		};
	});