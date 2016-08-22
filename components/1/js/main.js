
	$(document).ready(function(){
	
		
		$('.search').click(function(e){
				e.preventDefault();
				$('form')
					.fadeIn("fast");
		});
		
		$('.close').click(function(){
				$('form')
				.fadeOut("fast");
		});
		
		$('<div></div>')
			.attr('id', 'overlay')
			.hover(function(){
				$(this).addClass('active');
			}, function(){
				$(this).removeClass('active');
				setTimeout(function(){
					$('#overlay:not(.active)').slideUp();
				}, 800);
			}).appendTo('body');
			
		$('.cart').mouseover(function(){
			$('#overlay:not(:animated)')
				.addClass('active')
				.html('<h1>You have 0 items in your cart.</h1>')
				.slideDown();
		});
	
	});