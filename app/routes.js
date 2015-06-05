angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/order', {
				templateUrl: 'app/pages/order/order.html',
				controller: 'PanelController',
				controllerAs: 'panel',
			})
			.when('/credit', {
				templateUrl: 'app/pages/credit/credit.html',
				controller: 'PanelController',
				controllerAs: 'panel',
			})
			.when('/learn', {
				templateUrl: 'app/pages/learn/learn.html',
			})
			.when('/terms', {
				templateUrl: 'app/pages/terms/terms.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);