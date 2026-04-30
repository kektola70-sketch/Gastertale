const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    fullscreenable: true, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.setMenu(null);

  // Обработка закрытия из игры
  ipcMain.on('close-app', () => {
    app.quit();
  });
}

app.whenReady().then(createWindow);