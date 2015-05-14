angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/order', {
				redirectTo: '/order/step1',
			})
			.when('/order/step1', {
				templateUrl: 'app/pages/order/order.html',
				controller: 'ProductsController',
				controllerAs: 'products',
			})
			.when('/credit', {
				templateUrl: 'app/pages/credit/credit.html',
				controller: 'PanelController',
				controllerAs: 'panel',
			})
			.when('/learn', {
				templateUrl: 'app/pages/learn/learn.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);