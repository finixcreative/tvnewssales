angular.module('productsMod')
	.controller('ProductsController', ['$scope', function($scope){
		this.products = products;
		$scope.products = {};
		$scope.update = function(order) {
			$scope.master = angular.copy(order);
		};
	}]);