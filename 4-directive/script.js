function aController($scope){
	$scope.basket = [];

	order_list = [
		{name:'apple',thumb:'http://findicons.com/files/icons/343/fruits/128/apple.png',taste: "sweet", price: 5},
		{name:'orange',thumb:'http://findicons.com/files/icons/343/fruits/128/orange.png',taste: "sour", price: 7},
		{name:'banana',thumb:'http://png-4.findicons.com/files/icons/343/fruits/128/banana.png',taste: "sweet", price: 4.25},
		{name:'watermelon',thumb:'http://www.designdownloader.com/item/pngs/Watermelon_f004/Watermelon_f004-20120528154814-00003.png',taste: "sweet", price: 20}
	]

	$scope.init = function(){
		$scope.loadBasket();
	}

	$scope.loadBasket = function(){
		$scope.basket = order_list;
	}
}