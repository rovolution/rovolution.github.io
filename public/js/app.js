var NAVBAR_FIXED_HIDDEN_CLASSNAME = "navbar-fixed-hidden";

$(document).ready(function() {
	// On scroll, hide/show header
	var bodyElement = document.getElementsByTagName("body")[0];
	var navMainElement = document.getElementById("navbar-main");
	var previousScrollTop = bodyElement.scrollTop;

	window.onscroll = function() {

		var pageScrollingDown = bodyElement.scrollTop > previousScrollTop;

		if(pageScrollingDown) {
			navMainElement.classList.add(NAVBAR_FIXED_HIDDEN_CLASSNAME);
		}
		else {
			navMainElement.classList.remove(NAVBAR_FIXED_HIDDEN_CLASSNAME);
		}

		previousScrollTop = bodyElement.scrollTop;

	};

});