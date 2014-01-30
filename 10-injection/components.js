angular.module('components', [])
	.service('myUtilities', myServices)

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