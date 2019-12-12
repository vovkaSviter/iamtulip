$(document).ready(initPage);

function initPage(){
	
	
	function bbPricesItemModal(){
		var items = $('.bbPricesItem');
		
		items.mouseenter(function(){
			$('.itemCover', this).css('opacity','1');
		}).mouseleave(function(){
			$('.itemCover', this).css('opacity','0');
		});		
		
	};
	bbPricesItemModal();
	
	
	console.log('ooops! into your mouth :/');
	
};