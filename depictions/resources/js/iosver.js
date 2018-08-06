//Thank you Matchstic, you beautiful person
const VERSION_CHECK_SUPPORTED = "<p>iOS %s is supported. ✓</p>";
const VERSION_CHECK_UNSUPPORTED = "<p>iOS %s is not supported. ✕</p>";
const VERSION_CHECK_UNCONFIRMED = "<p>iOS %s has not been tested!</p>";

function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}

var maxVersion = document.getElementById('maxVersion').innerHTML;
var minVersion = document.getElementById('minVersion').innerHTML;
var version = iOSversion();
var versionNumber = String(version[0] + "." + version[1]);
	
	if(versionNumber >= minVersion && version <= maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_SUPPORTED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(39,174,96, 0.5)");
	} else if(versionNumber > maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNCONFIRMED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(192,57,43, 0.5)");
	} else if(!versionNumber) {
		document.getElementById('compatibility').innerHTML="<p>Can't get device version.</p>";
		document.body.style.setProperty("--title-color", "rgba(192,57,43, 0.5)");
	} else {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
		document.body.style.setProperty("--title-color", "rgba(192,57,43, 0.5)");
	}
