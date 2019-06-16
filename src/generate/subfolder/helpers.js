const mkdir = require("../../../library/");
const path = require("path");

const generateHelper = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "helpers")));
  });

module.exports = {
  generateHelper: generateHelper
};
