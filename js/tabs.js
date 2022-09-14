
// tabs js start

window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});

// tabs js end


class VideoCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
		<video width="100%" height="360px" autoplay muted controls>
		<source src="https://s3.ap-south-1.amazonaws.com/www.ajmerawadala.in/img/video/WhatsApp+Video+2022-08-29+at+4.23.46+PM.mp4">
		</video>
		`
	}
}
customElements.define("video-card",VideoCard);
