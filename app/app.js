angular.module('finixApp', [
	'ngRoute',
	'ngAnimate',
	'productsMod',
	'slidesMod',
	'headerMod',
	'navMod',
	'footerMod',
	'contactMod',
	'copyrightMod',
	'socialMod',
	'tabsMod',
	'displayMod'
]);

angular.module('displayMod', [])
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

angular.module('displayMod')
	.controller('DisplayController', function(){
		this.products = magazines;
	});