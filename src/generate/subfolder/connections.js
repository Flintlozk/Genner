const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateConnection = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "connections")));
  });

module.exports = {
  generateConnection: generateConnection
};
