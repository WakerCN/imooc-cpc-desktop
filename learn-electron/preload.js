/*
 * @Author       : 魏威
 * @Date         : 2025-06-30 14:20
 * @LastEditTime : 2025-07-11 06:57
 * @LastEditors  : StarOne
 * @Description  :
 */
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: process.versions.node,
  chrome: process.versions.chrome
});

contextBridge.exposeInMainWorld("electron", {
  setTitle: (title) => ipcRenderer.send("setTitle", title),
  writeFile: (content) => ipcRenderer.invoke("writeFile", content),

  updateCounter: (callback) =>
    ipcRenderer.on("update-count", (_event, count) => callback(count))
});
