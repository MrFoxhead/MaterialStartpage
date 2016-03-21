document.body.style.background = '#424F5A';
//document.body.style.backgroundImage = 'url(https://unsplash.it/' + window.innerWidth + '/' + window.innerHeight + '/g/?random&blur)';
//document.body.style.backgroundImage = 'url(https://unsplash.com/photos/nQILmS20m8o/blur)';


var searchbox = document.getElementById('search');
var searchbutton = document.getElementById('button-search')

window.onload = function() {
    var input = searchbox.focus();
};

searchbox.onkeypress = function(e) {
	if (e.keyCode === 13) {
		search();
	}
}

searchbutton.addEventListener('click', search, false);

function search() {
	var query = searchbox.value;
	window.location = 'https://www.google.it/search?site=&source=hp&q=' + query;
}
