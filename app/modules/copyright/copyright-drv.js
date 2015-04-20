angular.module('copyrightMod', [])
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/copyright/copyright.html'
		};
	});