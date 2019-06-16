const path = require("path");
const mkdir = require("../../../library/");

const generateData = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "data")));
  });

module.exports = {
  generateData: generateData
};
