const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateLibrary = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "lib")));
  });

module.exports = {
  generateLibrary: generateLibrary
};
