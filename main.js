const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname, {
    require: (`${__dirname}/node_modules/electron`)
})

function createWindow() {
    const wind = new BrowserWindow({
        icon:"img/ic.png",
        width: 1300,
        height: 700,
        fullscreen:true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            nativeWindowOpen: true,
        }
    })
    wind.loadFile('index.html')
}
app.whenReady().then(createWindow);


