#!/usr/bin/env node

const arg = require("arg");
const { read } = require("./src/read");
const { generate } = require("./src/generate");

const commands = {
  // Types
  "--help": Boolean,
  "--test": Boolean,
  "--hello": Boolean,
  "--generate": String,

  //Aliases
  "-h": "--help",
  "-g": "--generate"
};

const commandCondition = async args => {
  switch (true) {
    case args["--help"]: {
      console.log("SHOW HELP LIST");
      break;
    }
    case args["--test"]:
      console.log("YEAH IS TRUE");
      break;
    case args["--hello"]:
      console.log("Hi ! ! !");
      break;
    case typeof args["--generate"] === "string":
      process.env.gnnProjectName = args["--generate"];
      generate();
      break;
    default:
      console.log("args->>", args);
      await read();
      break;
  }
};

try {
  commandCondition(arg(commands));
} catch (err) {
  if ("Error: Option requires argument".indexOf(err) == -1) {
    console.log("REQUIRED ARGUEMNT");
  } else if (err.code === "ARG_UNKNOWN_OPTION") {
    console.log(err.message);
  }
}
