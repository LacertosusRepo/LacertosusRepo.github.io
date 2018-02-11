function iOSversion() {	
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}

//supportCheck = document.getElementById("supportsIOS".innerHTML;
ver = iOSversion();
if (ver[0] >= 8) {
	document.getElementById('version').innerHTML='<p>Your device is supported.</p>';
} if (ver[0] >= 10) {
	document.getElementById('version').innerHTML='<p>Your device is supported.</p>';
} if (supportCheck = 11) {
	document.getElementById('version').innerHTML='<p>It Work.</p>';
} else {
	document.getElementById('version').innerHTML='<p>Your device is not supported. 3</p>';
}
