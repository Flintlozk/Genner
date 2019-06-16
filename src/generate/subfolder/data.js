const path = require("path");
const {mkDIR}  = require("../../../library/");

const generateData = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "data")));
  });

module.exports = {
  generateData: generateData
};
