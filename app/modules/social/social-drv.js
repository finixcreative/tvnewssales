angular.module('socialMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			templateUrl: '/tvnewssales/app/modules/social/social.html',
			controller: 'SocialController',
			controllerAs: 'social',
		};
	});