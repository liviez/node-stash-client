"use strict";
// Project
const asPaged = require(`${__base}/src/createOptions/asPaged`);
const createOptions = require(`${__base}/src/createOptions`);
const filterProperties = require(`${__base}/src/filterProperties`);
const projectsPath = require(`${__base}/api/projects/path`);
const request = require(`${__base}/lib/request`);
const toProject = require(`${__base}/api/projects/toProject`);

// Setup
const filterListParams = filterProperties(asPaged(["name", "permission"]));

module.exports = config =>
  Object.freeze({
    avatar: projectKey =>
      require(`${__base}/api/projects/avatar`)(config, projectKey),
    create: values =>
      request(createOptions.forPost(config, projectsPath(), toProject(values))),
    delete: projectKey =>
      request(createOptions.forDelete(config, projectsPath(projectKey))),
    get: projectKey =>
      request(createOptions.forGet(config, projectsPath(projectKey))),
    list: params =>
      request(
        createOptions.forGet(config, projectsPath(), filterListParams(params))
      ),
    permissions: projectKey =>
      require(`${__base}/api/projects/permissions`)(config, projectKey),
    repos: projectKey =>
      require(`${__base}/api/projects/repos`)(config, projectKey),
    update: (projectKey, values) =>
      request(
        createOptions.forPut(
          config,
          projectsPath(projectKey),
          toProject(values)
        )
      )
  });
