app.controller('MainController', [
	'$scope', 
	function($scope) { 
	  $scope.title = 'Hello World!'; 
	  $scope.product = { 
		    name: 'The Book of Trees', 
		    price: 19,
    		pubdate: new Date('2014', '03', '08')
		};
	  $scope.fruits = ["Apple", "Banana", "Orange", "Pineapple"];
	  $scope.imageURL = "http://www.opensourcephotography.org/themes/professional_theme/images/slide-image-1.jpg";
	  $scope.clickFn = function(i) {
	  	alert("This is fruit at index : " + i + ".");
	  }
	}]);