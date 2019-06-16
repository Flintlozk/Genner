const mkdir = require("../../../library/");
const path = require("path");

const generateLibrary = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "lib")));
  });

module.exports = {
  generateLibrary: generateLibrary
};
