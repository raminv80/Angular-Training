function aController($scope){

	$scope.list = ['apple','orange','banana']

	$scope.init=function(){
		$scope.myValue = 3
	}

	$scope.trunc = function(num)
	{
	    return Math.abs(num) % $scope.list.length;
	}
}