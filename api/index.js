'use strict';

module.exports = config =>
  Object.freeze({
    admin: () => require(`${__base}/api/admin`)(config),
    applicationProperties: () =>
      require(`${__base}/api/applicationProperties`)(config),
    hooks: () => require(`${__base}/api/hooks`)(config),
    logs: () => require(`${__base}/api/logs`)(config),
    markup: () => require(`${__base}/api/markup`)(config),
    profile: () => require(`${__base}/api/profile`)(config),
    projects: () => require(`${__base}/api/projects`)(config),
    repos: params => require(`${__base}/api/repos`)(config, params),
    users: () => require(`${__base}/api/users`)(config),
    tasks: () => require(`${__base}/api/tasks`)(config)
  });