/*
 * @Author       : 魏威
 * @Date         : 2025-06-30 14:24
 * @LastEditTime : 2025-07-11 08:04
 * @LastEditors  : StarOne
 * @Description  :
 */

const fs = window.require("fs");
const { dialog } = window.require("@electron/remote");

const info = document.getElementById("info");

info.innerHTML = `This app is running Electron \n Node version: ${window.versions.node} \n chrome version ${window.versions.chrome}`;

const titleDom = document.getElementById("title");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  const title = titleDom.value;
  window.electron.setTitle(title);
  dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] });
});

const fileContentInputDom = document.getElementById("fileContentInput");
const writeBtn = document.getElementById("write-btn");
const fileSizeDom = document.getElementById("fileSize");
const fileContentDom = document.getElementById("fileContent");

writeBtn.addEventListener("click", async () => {
  const fileContent = fileContentInputDom.value;
  const fileSize = await window.electron.writeFile(fileContent);
  fileSizeDom.innerHTML = `File size: ${fileSize} bytes`;
  const fsContent = await fs.promises.readFile("test.txt", {
    encoding: "utf-8"
  });
  fileContentDom.innerHTML = `File content: ${fsContent}`;
});

const counterDom = document.getElementById("counter");
window.electron.updateCounter((count) => {
  counterDom.innerHTML = `Counter: ${count}`;
});
