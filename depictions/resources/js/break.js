function broken() {

	Header.className = 'animated hinge';
	SecretText.className = 'hiddenText animated fadeIn';

}

function fix() {
	
	document.getElementById("ThemeButton").innerText;
	if(document.getElementById("Header").className === 'animated hinge') {
	
		Header.className = 'animated fadeInDown';
		SecretText.className = 'hiddenText animated fadeOut';
	}
}