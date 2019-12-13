$(document).ready(initPage);

function initPage(){
	
	
	function bbPricesItemModal(){
		var items = $('.bbPricesItem');
		
		items.mouseenter(function(){
			$('.itemCover', this).animate({opacity : 1} , {duration : 250, easing: 'swing', queue: false});
		}).mouseleave(function(){
			$('.itemCover', this).animate({'opacity' : '0'}, 250, 'swing');
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