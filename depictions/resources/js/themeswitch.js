window.onload = function() {
	var currentTheme = localStorage.getItem("theme");
	var isPackageDescription = document.querySelector('meta[name="description"]').content === 'Package Description';

	if((currentTheme === 'dark' || currentTheme == null) && !isPackageDescription) {

		//Dark Mode
		document.body.style.setProperty("--bg-color", "#212121");
		document.body.style.setProperty("--field-color", "#242424");
		document.body.style.setProperty("--button-color", "#EEEEEE");
		document.body.style.setProperty("--button-text", "#212121");
		document.body.style.setProperty("--label-color", "rgba(191, 191, 191, 0.38)");
		document.body.style.setProperty("--font-color", "rgba(191, 191, 191, 0.70)");
		document.body.style.setProperty("--tap-color", "#rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#EF5350");

		if(document.getElementById("ThemeButton")) {
			document.getElementById("ThemeButton").innerText = 'Light Mode';
		}
	}

	else if(currentTheme === 'light' || isPackageDescription) {

		//Light Mode
		document.body.style.setProperty("--bg-color", "#EEEEEE");
		document.body.style.setProperty("--field-color", "#FAFAFA");
		document.body.style.setProperty("--button-color", "#212121");
		document.body.style.setProperty("--button-text", "#EEEEEE");
		document.body.style.setProperty("--label-color", "rgba(33, 33, 33, 0.38)");
		document.body.style.setProperty("--font-color", "rgba(33, 33, 33, 0.90)");
		document.body.style.setProperty("--tap-color", "rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#2196F3");

		if(document.getElementById("ThemeButton")) {
			document.getElementById("ThemeButton").innerText = 'Dark Mode';
		}
	}

	console.log(currentTheme);
	console.log(isPackageDescription);
}

function switchTheme() {
	var currentTheme = localStorage.getItem("theme");

	if(currentTheme === 'light' || currentTheme == null) {

		//Dark Theme
		document.body.style.setProperty("--bg-color", "#212121");
		document.body.style.setProperty("--field-color", "#242424");
		document.body.style.setProperty("--button-color", "#EEEEEE");
		document.body.style.setProperty("--button-text", "#212121");
		document.body.style.setProperty("--label-color", "rgba(191, 191, 191, 0.38)");
		document.body.style.setProperty("--font-color", "rgba(191, 191, 191, 0.70)");
		document.body.style.setProperty("--tap-color", "#rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#EF5350");
		document.getElementById("ThemeButton").innerText = 'Light Mode';
		localStorage.setItem("theme", 'dark');
	}

	else if(currentTheme === 'dark') {

		//Light Mode
		document.body.style.setProperty("--bg-color", "#EEEEEE");
		document.body.style.setProperty("--field-color", "#FAFAFA");
		document.body.style.setProperty("--button-color", "#212121");
		document.body.style.setProperty("--button-text", "#EEEEEE");
		document.body.style.setProperty("--label-color", "rgba(33, 33, 33, 0.38)");
		document.body.style.setProperty("--font-color", "rgba(33, 33, 33, 0.90)");
		document.body.style.setProperty("--tap-color", "rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#2196F3");
		document.getElementById("ThemeButton").innerText = 'Dark Mode';
		localStorage.setItem("theme", 'light');
	}
}
