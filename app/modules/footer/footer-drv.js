angular.module('footerMod', [])
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			templateUrl: '/tvnewssales/app/modules/footer/footer.html'
		};
	});