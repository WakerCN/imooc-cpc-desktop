/*
 * @Author       : 魏威
 * @Date         : 2025-06-30 14:24
 * @LastEditTime : 2025-06-30 15:38
 * @LastEditors  : StarOne
 * @Description  :
 */
const info = document.getElementById("info");

info.innerHTML = `This app is running Electron \n Node version: ${window.versions.node} \n chrome version ${window.versions.chrome}`;

const titleDom = document.getElementById("title");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  const title = titleDom.value;
  window.electron.setTitle(title);
});

const fileContentInputDom = document.getElementById("fileContent");
const writeBtn = document.getElementById("write-btn");
const fileSizeDom = document.getElementById("fileSize");

writeBtn.addEventListener("click", async () => {
  const fileContent = fileContentInputDom.value;
  const fileSize = await window.electron.writeFile(fileContent);
  fileSizeDom.innerHTML = `File size: ${fileSize} bytes`;
});
