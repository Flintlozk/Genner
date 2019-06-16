const fs = require("fs");
const path = require("path");

const makeDirectory = pathName =>
  new Promise(async (resolve, reject) => {
    fs.mkdir(pathName, err => {
      err ? reject(err) : resolve();
    });
  });

const writeFile = (pathName, content) =>
  new Promise(async (resolve, reject) => {
    fs.writeFile(path.join(pathName, "index.js"), content, err => {
      err ? reject(err) : resolve();
    });
  });

module.exports = {
  mkDIR: makeDirectory,
  writeFile: writeFile
};
