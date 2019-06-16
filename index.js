#!/usr/bin/env node

const arg = require("arg");
const { read } = require("./src/read");

const commands = {
  // Types
  "--help": Boolean,
  "--test": Boolean,
  "--hello": Boolean,

  //Aliases
  "-h": "--help"
};

const commandCondition = async args => {
  switch (true) {
    case args["--help"] || args["-h"]: {
      console.log("SHOW HELP LIST");
      break;
    }
    case args["--test"]:
      console.log("YEAH IS TRUE");
      break;
    case args["--hello"]:
      console.log('Hi ! ! !')
      break;
    default:
      await read();
      break;
  }
};

try {
  commandCondition(arg(commands));
} catch (err) {
  if (err.code === "ARG_UNKNOWN_OPTION") {
    console.log(err.message);
  } else {
    throw err;
  }
}
