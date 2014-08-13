jQuery(document).ready(function($) {
	var article 	= $(".center-article"),
		leftBar		= $(".left-side-bar")
		maxHeight	= $(".side-bar").height()-20,
		options 	= {
		 	cursorcolor : "#b6b6b6",
		 	railalign: "left",
		 	horizrailenabled: false
		 };;
	$("#accordion").accordion();
	 $( ".select" ).selectmenu();
	 $( ".filter" ).menu({ 
	 	position: { my: "center top", at: "right-5 top+25" } ,
	 	icons: {  submenu: "ui-icon-carat-1-s" }
	 });
	 $("section.result").append('<div class="divider"></div>');
	 if (article.height() > maxHeight) {
		 article.height(maxHeight);
		 article.niceScroll(options);
	 };
	 if (leftBar.height() > maxHeight) {
 		 leftBar.height(maxHeight);
 		 leftBar.niceScroll(options);
	 };
	

	 
});