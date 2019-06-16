const mkdir = require("../../../library/");
const path = require("path");

const generateConfig = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "configs")));
  });

module.exports = {
  generateConfig: generateConfig
};
