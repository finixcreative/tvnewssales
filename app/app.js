angular.module('finixApp', [
	'ngRoute',
	'ngAnimate',
	'productsMod',
//	'articlesMod',
	'profilesMod',
	'slidesMod',
	'headerMod',
	'navMod',
	'footerMod',
	'contactMod',
	'copyrightMod',
	'socialMod',
	'tabsMod'
]);

angular.module('display', [])
	.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		this.nextTab = function(checkTab){
			return this.tab === checkTab++;
		};
	});

angular.module('display')
	.controller('DisplayController', function(){
		this.products = magazines;
	});