jQuery(document).ready(function($) {
	var article 	= $(".center-article"),
		leftBar		= $(".left-side-bar"),
		store 		= $("article.store"),
		profile		= $("article.profile"),
		options 	=  {cursorcolor : "#b6b6b6",railalign: "left",horizrailenabled: false};

		 // jqueryUi
	$("#accordion").accordion();
	$( ".select" ).selectmenu();
	$( ".filter" ).menu({ 
		position: { my: "center top", at: "right-40 top+45" } ,
		icons: {  submenu: "ui-icon-carat-1-s" }
	});

	 // divider
	$("section.result").append('<div class="divider"></div>');
	 

	 	 // niceScroll
	var myNiceScroll = function  (element) {
	 	var maxHeight	= $(".side-bar").height()-20;
	 	if (element.height() > maxHeight) {
		element.height(maxHeight);
		element.niceScroll(options);
	 	};
	};
	 // myNiceScroll(article);
	 // myNiceScroll(leftBar);
	 // myNiceScroll(store);
	 // myNiceScroll(profile);


	

	 
});