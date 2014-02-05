angular.module('myApp', ['components'])
	.controller('aController', ['$scope', 'myUtilities', 'appThirdParties', aController])

function aController($scope, myUtilities, thirdParty){
	$scope.basket = [];
	$scope.new_fruit = {name:null, price:null}

	$scope.init = function(){
		$scope.loadBasket();
		$scope.greetings = thirdParty.sayHello();
	}

	$scope.loadBasket = function(){
		$scope.basket = thirdParty.getFruits();
		$scope.id=$scope.basket.length;
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