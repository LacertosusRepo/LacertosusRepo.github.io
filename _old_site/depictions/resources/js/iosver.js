//Thank you Matchstic, you beautiful person
const VERSION_CHECK_SUPPORTED = "<p>iOS <strong>%s</strong> is supported ✓</p>";
const VERSION_CHECK_INFO = "<p>Compatible with iOS <strong>%n</strong> to <strong>%x</strong>. Add this repo to your package manager to install.";
const VERSION_CHECK_UNSUPPORTED = "<p>iOS <strong>%s</strong> is not supported ✕</p>";
const VERSION_CHECK_BETA = "<p>This package is in beta! iOS <strong>%s</strong> may not be supported.</p>";
const VERSION_CHECK_APP = "<p>%a <strong>v%v</strong> is supported. Later versions may also work.</p>";

function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];

	} else {
		return 0;
	}
}

var isBeta = document.getElementById('isBeta').innerHTML;
var applicationPackage = document.getElementById('applicationPackage').innerHTML;
var applicationName = document.getElementById('applicationName').innerHTML;
var applicationVersion = document.getElementById('applicationVersion').innerHTML;
var maxVersion = document.getElementById('maxVersion').innerHTML;
var minVersion = document.getElementById('minVersion').innerHTML;

var version = iOSversion();
var versionNumber = String(version[0] + "." + version[1]);

		//If version doesnt exists, the page was viewed in a browser or non-iOS device
	if(isBeta == "YES") {
		if(version) {
			document.getElementById('compatibility').innerHTML=VERSION_CHECK_BETA.replace("%s", versionNumber);
			document.body.style.setProperty("--title-color", "rgba(225,174,66, 0.35)");
		} else {
			document.getElementById('compatibility').innerHTML="<p>This package is in beta! It may not work on certain devices or iOS versions.</p>";
			document.body.style.setProperty("--title-color", "rgba(225,174,66, 0.35)");
		}

	} else if(applicationPackage == "YES") {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_APP.replace("%a", applicationName).replace("%v", applicationVersion);
		document.body.style.setProperty("--title-color", "rgba(39,174,96, 0.35)");

	} else if(version && versionNumber >= minVersion && versionNumber <= maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_SUPPORTED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(39,174,96, 0.35)");

	} else if(version && versionNumber > maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(192,57,43, 0.35)");

	} else {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_INFO.replace("%n", minVersion).replace("%x", maxVersion);
		document.body.style.setProperty("--title-color", "rgba(39,174,96, 0.35)");
	}
