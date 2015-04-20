angular.module('contactMod', [])
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/contact/contact.html'
		};
	});