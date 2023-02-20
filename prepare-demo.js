var fs = require("fs");
const fse = require("fs-extra");
const child_process = require("child_process");

fse.copySync("./dist/", "./live-demo/extension-web-playground/dist/");
fse.copyFileSync("package.json", "./live-demo/extension-web-playground/package.json");

process.chdir("./live-demo/");
child_process.execSync('yarn', {stdio: 'inherit'});

fse.moveSync("./node_modules/vscode-web","./vscode-web/");
fse.removeSync("./node_modules/");

