angular.module('productsMod')
	.controller('ProductsController', ['$scope', function($scope){
		this.products = products;
		$scope.order = {};
		$scope.order.title = "Stuff"
		$scope.update = function(order) {
			$scope.master = angular.copy(order);
		};
	}]);