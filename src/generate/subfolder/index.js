const { generateConfig } = require("./config");
const { generateConnection } = require("./connections");
const { generateControllers } = require("./controllers");
const { generateData } = require("./data");
const { generateDomains } = require("./domains");
const { generateErrors } = require("./errors");
const { generateLibrary } = require("./library");
const { generateHelper } = require("./helpers");
const { generateRoutes } = require("./routes");
const { generateSchema } = require("./schema");
const { generateServices } = require("./services");
const { generateTest } = require("./test");

const generateAllAtOnce = () =>
  new Promise(async (resolve, reject) => {
    resolve(
      await Promise.all([
        generateConfig(),
        generateConnection(),
        generateControllers(),
        generateData(),
        generateDomains(),
        generateErrors(),
        generateLibrary(),
        generateHelper(),
        generateRoutes(),
        generateSchema(),
        generateServices(),
        generateTest()
      ])
    );
  });

module.exports = {
  generateConfig: generateConfig,
  generateConnection: generateConnection,
  generateControllers: generateControllers,
  generateData: generateData,
  generateDomains: generateDomains,
  generateErrors: generateErrors,
  generateErrors: generateErrors,
  generateLibrary: generateLibrary,
  generateHelper: generateHelper,
  generateRoutes: generateRoutes,
  generateSchema: generateSchema,
  generateServices: generateServices,
  generateTest: generateTest,
  generateAllAtOnce: generateAllAtOnce
};
