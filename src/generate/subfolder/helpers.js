const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateHelper = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "helpers")));
  });

module.exports = {
  generateHelper: generateHelper
};
