var myModule = angular.module('myModule',[]);
myModule.controller('myController',[
	'$scope',
	function($scope){
		$scope.myData = 'myData';
	},
]);
