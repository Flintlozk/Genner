const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateControllers = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "controllers")));
  });

module.exports = {
  generateControllers: generateControllers
};
