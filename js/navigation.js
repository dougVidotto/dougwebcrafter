
function setMenuBarNavigation() {
	
	var menu = document.getElementById("menu");
	var navbar = document.querySelector("#menu-links");
	var main = document.querySelector('#container');

	menu.addEventListener('click', function(e) {
		navbar.classList.toggle('show-menu');
		e.stopPropagation();
	});

	main.addEventListener('click', function(e) {
		navbar.classList.remove('show-menu');
	});	
}
