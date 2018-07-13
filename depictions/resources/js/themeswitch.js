window.onload = function() {
	var currentTheme = localStorage.getItem("theme");
	
	document.body.style.setProperty("--trans-time", "0s");
	if(currentTheme === 'Dark Theme') {
		
		//Dark Theme
		document.body.style.setProperty("--bg-color", "#1f2329");
		document.body.style.setProperty("--title-color", "rgba(45,51,59, 0.5)");
		document.body.style.setProperty("--field-color", "#2d333b");
		document.body.style.setProperty("--button-color", "#cfd1c9");
		document.body.style.setProperty("--button-text", "#47515f");
		document.body.style.setProperty("--label-color", "#cfd1c9");
		document.body.style.setProperty("--font-color", "#cfd1c9");
		document.body.style.setProperty("--tap-color", "#cfd1c9");
		document.body.style.setProperty("--hype-color", "#b4425c");
		document.getElementById("ThemeButton").innerText = 'Light Theme';
		
	} else {
		
		//Light Theme
		document.body.style.setProperty("--bg-color", "#efeff4");
		document.body.style.setProperty("--title-color", "rgba(204, 204, 204, 0.5)");
		document.body.style.setProperty("--field-color", "#ffffff");
		document.body.style.setProperty("--button-color", "#365d70");
		document.body.style.setProperty("--button-text", "#cad0d5");
		document.body.style.setProperty("--label-color", "#6d6d72");
		document.body.style.setProperty("--font-color", "#000000");
		document.body.style.setProperty("--tap-color", "rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#425fb4");
		document.getElementById("ThemeButton").innerText = 'Dark Theme';

	}	
}

function switchTheme() {
	
	currentTheme = document.getElementById("ThemeButton").innerText;
	document.body.style.setProperty("--trans-time", "1s");
	
	if(currentTheme === 'Dark Theme') {
		
		//Dark Theme
		document.body.style.setProperty("--bg-color", "#1f2329");
		document.body.style.setProperty("--title-color", "rgba(45,51,59, 0.5)");
		document.body.style.setProperty("--field-color", "#2d333b");
		document.body.style.setProperty("--button-color", "#cfd1c9");
		document.body.style.setProperty("--button-text", "#47515f");
		document.body.style.setProperty("--label-color", "#cfd1c9");
		document.body.style.setProperty("--font-color", "#cfd1c9");
		document.body.style.setProperty("--tap-color", "#cfd1c9");
		document.body.style.setProperty("--hype-color", "#b4425c");
		document.getElementById("ThemeButton").innerText = 'Light Theme';
		localStorage.setItem("theme", currentTheme);
		
	} else {
		
		//Light Theme
		document.body.style.setProperty("--bg-color", "#efeff4");
		document.body.style.setProperty("--title-color", "rgba(204, 204, 204, 0.5)");
		document.body.style.setProperty("--field-color", "#ffffff");
		document.body.style.setProperty("--button-color", "#365d70");
		document.body.style.setProperty("--button-text", "#cad0d5");
		document.body.style.setProperty("--label-color", "#6d6d72");
		document.body.style.setProperty("--font-color", "#000000");
		document.body.style.setProperty("--tap-color", "rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#425fb4");
		document.getElementById("ThemeButton").innerText = 'Dark Theme';
		localStorage.setItem("theme", currentTheme);

	}
}