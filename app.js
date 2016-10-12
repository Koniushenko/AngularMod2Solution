(function(){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buyList = this;

		buyList.items = ShoppingListCheckOffService.getBuyItems();

		buyList.moveItem = function(itemIndex) {

			ShoppingListCheckOffService.moveItem(itemIndex);

		}
	}



	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtList = this;

		boughtList.items = ShoppingListCheckOffService.getBougthItems()

	}


	function ShoppingListCheckOffService() {

		var service = this;

		var buyItems = [{name: 'cookies', quantity: 10}, 
						{name: 'chips', quantity: 5},
						{name: 'vodka', quantity: 8},
						{name: 'beer', quantity: 10},
						{name: 'cannabis', quantity: 15}];
		var boughtItems = [];

		service.getBuyItems = function() {

			return buyItems;

		}

		service.getBougthItems = function() {

			return boughtItems;
		}

		service.moveItem = function(itemIndex) {
			var movingItem = buyItems[itemIndex];
			buyItems.splice(itemIndex, 1);
			boughtItems.push(movingItem);

		}
	}


})();