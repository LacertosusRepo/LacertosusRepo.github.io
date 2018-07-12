//Thank you Matchstic, you beautiful man
const VERSION_CHECK_SUPPORTED = "iOS %s is supported. ✓";
const VERSION_CHECK_UNSUPPORTED = "iOS %s is not supported. ✕";
const VERSION_CHECK_UNCONFIRMED = "iOS %s has not been tested!";

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
var versionNumber = parseFloat(version[0] + "." + version[1]);
	
	if(versionNumber >= minVersion && version <= maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_SUPPORTED.replace("%s", versionNumber);
	} else if(versionNumber > maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNCONFIRMED.replace("%s", versionNumber);
	} else if(!versionNumber) {
		document.getElementById('compatibility').innerHTML="Can't get iOS version.";
	} else {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
	}
