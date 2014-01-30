angular.module('myApp', [])
	.service('myUtilities', myServices)
	.controller('aController', ['$scope','myUtilities',aController])

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

function myServices(){
	this.name2pic = function(name){
		name = name.toLowerCase()
		switch (name){
			case "apple": 
				return 'http://findicons.com/files/icons/343/fruits/128/apple.png'
				break
			case "orange": 
				return 'http://findicons.com/files/icons/343/fruits/128/orange.png'
				break;
			case "banana": 
				return 'http://png-4.findicons.com/files/icons/343/fruits/128/banana.png'
				break;
			case "watermelon": 
				return 'http://www.designdownloader.com/item/pngs/Watermelon_f004/Watermelon_f004-20120528154814-00003.png'
				break;
			default: return "http://png-2.findicons.com/files/icons/2001/2s_emotions_v/128/icon_question.png"
		}
	}
}