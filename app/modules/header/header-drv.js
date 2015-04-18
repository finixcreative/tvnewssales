angular.module('headerMod', [])
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/tvnewssales/app/widgets/header/header.html'
		};
	});