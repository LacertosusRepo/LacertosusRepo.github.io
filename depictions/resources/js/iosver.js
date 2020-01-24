//Thank you Matchstic, you beautiful person
const VERSION_CHECK_SUPPORTED = "<p>iOS %s is supported. ✓</p>";
const VERSION_CHECK_INFO = "<p>Compatible with iOS %n to %x. Add this repo to your package manager to install.";
const VERSION_CHECK_UNSUPPORTED = "<p>iOS %s is not supported. ✕</p>";
const VERSION_CHECK_BETA = "<p>This is beta software! iOS %s may not be supported.</p>";

function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	} else {
		return 0;
	}
}

var maxVersion = document.getElementById('maxVersion').innerHTML;
var minVersion = document.getElementById('minVersion').innerHTML;
var version = iOSversion();
var versionNumber = String(version[0] + "." + version[1]);

	if(!version) {
		if(minVersion == "beta" || maxVersion == "beta") {
			document.getElementById('compatibility').innerHTML="<p>This is beta software! It may not work on certain devices.</p>";
			document.body.style.setProperty("--title-color", "rgba(225,174,66, 0.5)");
		} else {
			document.getElementById('compatibility').innerHTML=VERSION_CHECK_INFO.replace("%n", minVersion).replace("%x", maxVersion);
			document.body.style.setProperty("--title-color", "rgba(39,174,96, 0.5)");
		}
	} else if(versionNumber >= minVersion && version <= maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_SUPPORTED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(39,174,96, 0.5)");
	} else if(versionNumber > maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(192,57,43, 0.5)");
	} else if(minVersion == "beta" || maxVersion == "beta") {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_BETA.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(225,174,66, 0.5)");
	} else {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(192,57,43, 0.5)");
	}
