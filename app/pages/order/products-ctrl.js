angular.module('productsMod')
	.controller('ProductsController', ['$scope', function($scope){
		this.products = products;
		$scope.order = {};
		$scope.update = function(order) {
			$scope.master = angular.copy(order);
		};
	}]);