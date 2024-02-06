require('@electron/remote/main').initialize();
const { app, BrowserWindow } = require('electron');

function onReady () {
	win = new BrowserWindow({
		width: 900,
		height: 6700,
		webPreferences: {
			enableRemoteModule: true,
			nodeIntegration: true,
			preload:'./preload.js',
			contextIsolation: false
		}
	});

    win.webContents.openDevTools();
	win.loadURL('http://localhost:4200');
}

app.on('ready', onReady);
