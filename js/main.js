jQuery(document).ready(function($) {
	var article = $(".center-article");
	$("#accordion").accordion();
	 $( ".select" ).selectmenu();
	 $( ".filter" ).menu({ 
	 	position: { my: "center top", at: "right-5 top+25" } ,
	 	icons: {  submenu: "ui-icon-carat-1-s" }
	 });
	 $("section.result").append('<div class="divider"></div>');
	 article.height($(".side-bar").height()-20);
	 article.niceScroll();
});