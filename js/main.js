jQuery(document).ready(function($) {
	var article 	= $(".center-article"),
		leftBar		= $(".left-side-bar"),
		store 		= $("article.store"),
		profile		= $("article.profile"),
		options 	=  {cursorcolor : "#b6b6b6",railalign: "left",horizrailenabled: false},
		notif		= $(".notifications");

		 // jqueryUi
	$("#accordion").accordion();
	$( ".select" ).selectmenu();
	

	 // divider
	$("section.result").append('<div class="divider"></div>');
	 
	$("#search,.messages,.book-add,.article-add").parents("article").css('background-color', '#fff');
	 	 // niceScroll
	// var myNiceScroll = function  (element) {
	//  	var maxHeight	= $(".side-bar").height()-20;
	//  	if (element.height() > maxHeight) {
	// 	element.height(maxHeight);
	// 	element.niceScroll(options);
	//  	};
	// };
	 // myNiceScroll(article);
	 // myNiceScroll(leftBar);
	 // myNiceScroll(store);
	 // myNiceScroll(profile);
 	$(".notifications").niceScroll(options);
 	// $(".side-bar.store").niceScroll(options);

 	$('.left-side-bar').scrollToFixed({
	    marginTop: function() {
	        var marginTop = $(window).height() - $('.left-side-bar').outerHeight(true) ;
	        if (marginTop >= 0) return 0;
	        return marginTop;
	    }
    });

    
	notif.hide();
	$('html').click(function() {
		notif.hide(100);
		$(".flag a").removeClass('active');
	});
	notif.on('click', function(event) {
		 event.stopPropagation();
		/* Act on the event */
	});
 	$(".flag").on('click', 'a', function(event) {
 		event.stopPropagation();
 		/* Act on the event */
 		$(this).toggleClass('active');
 		notif.toggle(100);

 	});

 	// when like or dislike or retweet add class active and increase the number

 	$('.article-actions').on('click', 'a', function(event) {
 		event.preventDefault();
 		var pop = $(this),
 		popNumber = parseInt(pop.find('span').text(),10);

 		if (! pop.hasClass('active')) {
 			pop.addClass('active').find('span').html(++popNumber);
 		}else{
 			pop.removeClass('active').find('span').html(--popNumber);
 		};
 	});
});