angular.module('myApp', ['components'])
	.controller('aController', ['$scope', 'myUtilities', aController])

function aController($scope, myUtilities){
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
	}

	$scope.loadBasket = function(){
		$scope.basket = order_list;
	}

	$scope.addItem = function(){
		$scope.new_fruit.id = ++$scope.id
		$scope.basket.push($scope.new_fruit)
		$scope.new_fruit = {name:null, price:null}
	}

	$scope.removeItem = function(fruit){
		var items = $scope.basket;
		for (var i = 0; i < items.length; i++)
    if (items[i].id && items[i].id === fruit.id) { 
        items.splice(i, 1);
        break;
    }
	}

	$scope.pic_for = function(fruit){
		return myUtilities.name2pic(fruit.name)
	}
}