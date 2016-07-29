var iOS = parseFloat(
	('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
	.replace('undefined', '3_2').replace('_', '.').replace('_', '')
) || false;

if (iOS <= 9.3.3) {
	document.getElementById('version').innerHTML='<p><strong>✓</strong> Your device is supported.</p>';
}
else {
	document.getElementById('version').innerHTML='<p><strong>x</strong> Your device is not supported.</p>';
}
