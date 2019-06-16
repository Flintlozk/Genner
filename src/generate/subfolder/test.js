const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateTest = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "test")));
  });

module.exports = {
  generateTest: generateTest
};
