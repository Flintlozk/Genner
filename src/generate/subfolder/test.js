const mkdir = require("../../../library/");
const path = require("path");

const generateTest = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkdir(path.join(process.env.gnnSubFolder, "test")));
  });

module.exports = {
  generateTest: generateTest
};
