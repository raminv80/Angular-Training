function aController($scope){
	$scope.basket = [];
	$scope.new_fruit = {name:null, price:null}
	$scope.id=3;

	order_list = [
		{id:0, name:'apple', price: 5},
		{id:1, name:'orange',price: 7},
		{id:2, name:'banana', price: 4.25},
		{id:3, name:'watermelon', price: 20}
	]

	$scope.init = function(){
		$scope.loadBasket();
		//Ajax get list of items
	}

	$scope.loadBasket = function(){
		$scope.basket = order_list;
		//Ajax get list of items
	}

	$scope.list = function(){
		return $scope.basket;
		//Ajax get list of items
	}

	$scope.create = function(){
		$scope.new_fruit.id = ++$scope.id
		$scope.basket.push($scope.new_fruit)
		$scope.new_fruit = {name:null, price:null}
		//Ajax add list of items and reload the data
	}

	$scope.delete = function(fruit){
		var items = $scope.basket;
		for (var i = 0; i < items.length; i++)
    if (items[i].id && items[i].id === fruit.id) { 
        items.splice(i, 1);
        break;
    }
    //Ajax remove item from list and reload the data
	}
}