/*
 * @Author       : 魏威
 * @Date         : 2025-06-30 09:41
 * @LastEditTime : 2025-07-11 08:01
 * @LastEditors  : StarOne
 * @Description  :
 */

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

const remote = require("@electron/remote/main");
remote.initialize();

function createWindow() {
  const window = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js")
    }
  });
  window.loadFile("index.html");
  window.webContents.openDevTools();
  return window;
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
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}

const handleWriteFile = async (event, filecontent) => {
  await fs.promises.writeFile("test.txt", filecontent);
  const stat = await fs.promises.stat("test.txt");

  return stat.size;
};

app.on("ready", () => {
  // const main = createWindow();
  // createTestWindow(main);

  const win = createWindow();
  remote.enable(win.webContents);
  ipcMain.on("setTitle", handleChangeTitle);
  ipcMain.handle("writeFile", handleWriteFile);

  // count Demo
  let count = 0;
  win.webContents.send("update-count", count);

  setInterval(() => {
    count += 3;
    win.webContents.send("update-count", count);
  }, 500);
});
