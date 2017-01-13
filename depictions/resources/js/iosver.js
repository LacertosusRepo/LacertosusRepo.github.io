function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}
ver = iOSversion();
if (ver[0] >= 8) {
	document.getElementById('version').innerHTML='<p><strong>✓</strong> Your device is supported.</p>';
}
if (ver[0] < 10) {
	document.getElementById('version').innerHTML='<body style="background-color:#ff0000"><p style="color:#ff5050"><strong>WARNING:</strong> Not tested on iOS 10</p></body';
}
else {
	document.getElementById('version').innerHTML='<p><strong>x</strong> Your device is not supported.</p>';
}
