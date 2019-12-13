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
	
	function xsMenu(){
		var trigger = $('#navXSTrigger');
		var navXS = $('#navXS');
		var navXSLinks = navXS.find('a');
		
		trigger.click(function(){
			$(this).toggleClass('active');
			navXS.toggleClass('active');
		});
		
		navXSLinks.click(function(){
			trigger.toggleClass('active');
			navXS.toggleClass('active');
		});
		
	};
	xsMenu();
	
	
	console.log('ooops! into your mouth :/');
	
};