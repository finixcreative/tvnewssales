angular.module('contactMod', [])
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: '/tvnewssales/app/modules/contact/contact.html'
		};
	});