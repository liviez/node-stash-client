"use strict";

global.__base = path.dirname(`${__filename}/`);

module.exports = config =>
  Object.freeze({
    api: () => require("./api")(config)
  });
