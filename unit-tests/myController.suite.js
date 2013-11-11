describe('myController',function(){
	var $scope = {};
	var mock = {
		$scope: $scope
	};
	beforeEach(function(){
		module('myModule');
		inject(function($injector){
			myController = $injector.get('$controller')('myController',mock);
		});
	});
	it('should exist',function(){
		expect(myController).toBeDefined();
	});
});
