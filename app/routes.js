angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/order', {
				templateUrl: 'app/pages/order/order.html',
				controller: 'ProductsController',
				controllerAs: 'products',
			})
			.when('/credit', {
				templateUrl: 'app/pages/credit/credit.html',
				controller: 'FormfieldsController',
				controllerAs: 'formfields',
			})
			.when('/learn', {
				templateUrl: 'app/pages/learn/learn.html',
			})
			.when('/contact', {
				templateUrl: 'app/pages/contact/contact.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);