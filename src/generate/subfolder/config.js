const { mkDIR, writeFile } = require("../../../library/");
const path = require("path");

const generateConfig = () =>
  new Promise(async (resolve, reject) => {
    const pathname = path.join(process.env.gnnSubFolder, "configs");
    await mkDIR(pathname);
    await writeFile(pathname, configContent);

    resolve();
  });

const configContent = `let config;
module.exports = config;
`;

module.exports = {
  generateConfig: generateConfig
};
