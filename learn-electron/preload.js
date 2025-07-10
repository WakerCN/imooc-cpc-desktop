/*
 * @Author       : 魏威
 * @Date         : 2025-06-30 14:20
 * @LastEditTime : 2025-07-10 17:55
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
  writeFile: (content) => ipcRenderer.invoke("writeFile", content)
});
