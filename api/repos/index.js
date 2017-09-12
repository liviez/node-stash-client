"use strict";

const curry = require("lodash/fp/curry");

// Project
const asPaged = require(`${__base}/src/createOptions/asPaged`);
const createOptions = require(`${__base}/src/createOptions`);
const filterProperties = require(`${__base}/src/filterProperties`);
const request = require(`${__base}/lib/request`);
const reposPath = require(`${__base}/api/repos/path`);

// Setup
const filterListParams = filterProperties(
  asPaged(["name", "projectname", "permission", "visibility"])
);

module.exports = curry((config, params) =>
  request(createOptions.forGet(config, reposPath(), filterListParams(params)))
);
