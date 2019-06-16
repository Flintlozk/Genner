const {mkDIR}  = require("../../../library/");
const path = require("path");

const generateRoutes = () =>
  new Promise(async (resolve, reject) => {
    resolve(await mkDIR(path.join(process.env.gnnSubFolder, "routes")));
  });

module.exports = {
  generateRoutes: generateRoutes
};
