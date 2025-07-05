/*
 * @Author       : 魏威
 * @Date         : 2025-06-30 09:41
 * @LastEditTime : 2025-07-06 06:58
 * @LastEditors  : StarOne
 * @Description  :
 */

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const window = new BrowserWindow({
    width: 850,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  window.loadFile("index.html");
  window.webContents.openDevTools();
}

function createTestWindow(parent) {
  const window = new BrowserWindow({
    width: 400,
    height: 300,
    parent
  });
  window.loadFile("second.html");
  // window.webContents.openDevTools();
}

function handleChangeTitle(event, title) {
  console.log("%c 🍻 title", "font-size:16px;color:#666666;background:#C0EBD7", title);
  console.log(
    "%c 🎂 event",
    "font-size:16px;color:#666666;background:#F8C28E",
    event
  );
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}

app.on("ready", () => {
  // const main = createWindow();
  // createTestWindow(main);

  createWindow();
  ipcMain.on("setTitle", handleChangeTitle);
});
