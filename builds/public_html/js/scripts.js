var acc = document.getElementsByClassName('learn');
var boxes = document.querySelectorAll('.training-box');
var i;
var service = document.getElementById('services');
var width = updateSize();
window.addEventListener('resize', function() {
	width = updateSize();
});
setListeners();

function updateSize() {
	return window.outerWidth;
}

function setListeners() {
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener('click', function() {
	    /* Toggle between adding and removing the 'active' class,
	    to highlight the button that controls the panel */
	    this.classList.toggle('active');

	    /* Toggle between hiding and showing the active panel */
	    var panel = this.previousElementSibling;
	    var learnMore = this.firstElementChild;
	    if (panel.style.maxHeight) {
	      panel.style.maxHeight = null;
	      panel.style.marginBottom = null;
	      learnMore.innerHTML = 'Learn More';
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + 'px';
	      panel.style.marginBottom = '20px';
	      learnMore.innerHTML = 'Hide';
	    }
	  });
	}
}