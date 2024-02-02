const { app, BrowserWindow } = require('electron');

function onReady () {
	win = new BrowserWindow({
		width: 900,
		height: 6700,
	});
	win.loadURL('http://localhost:4200');
}

app.on('ready', onReady);


// vibrancy: 'fullscreen-ui',    // on MacOS
// backgroundMaterial: 'acrylic' // on Windows 11