const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateServices = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "services")));
    });

module.exports = {
  generateServices: generateServices
};
