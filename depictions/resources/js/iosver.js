function iOSversion() {	
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}

var supportCheck = document.getElementById('supportsIOS').innerHTML;
ver = iOSversion();
if (supportCheck === "all") {
	document.getElementById('version').innerHTML='<p>Device is supported. ✓</p>';
} 
else if (ver[0] === 8 && supportCheck === "8") {
	document.getElementById('version').innerHTML='<p>Device is supported. ✓</p>';
}
else if (ver[0] === 9 && supportCheck === "9") {
	document.getElementById('version').innerHTML='<p>Device is supported. ✓</p>';
}
else if (ver[0] === 10 && supportCheck === "10") {
	document.getElementById('version').innerHTML='<p>Device is supported. ✓</p>';
}
else if (ver[0] === 11 && supportCheck === "11") {
	document.getElementById('version').innerHTML='<p>Device is supported. ✓</p>';
}
else {
	document.getElementById('version').innerHTML='<p>Your device is not supported. ✕</p>';
}
