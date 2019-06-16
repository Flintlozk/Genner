const mkdir = require("../../../library/");
const path = require("path");

const generateDomains = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "domains")));
  });

module.exports = {
  generateDomains: generateDomains
};
