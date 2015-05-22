angular.module('productsMod')
	.controller('ProductsController', ['$scope', function($scope){
		this.products = products;
		$scope.product.title.selected = {};
		$scope.update = function(order) {
			$scope.master = angular.copy(order);
		};
	}]);