const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('./src/index.html')

  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})