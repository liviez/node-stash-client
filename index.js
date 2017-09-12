"use strict";

global.__base = require('path').dirname(`${__filename}/`);

module.exports = config =>
  Object.freeze({
    api: () => require("./api")(config)
  });
