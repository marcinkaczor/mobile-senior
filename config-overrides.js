const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    '@mobileSenior': path.resolve(__dirname, 'src'),
  };

  return config;
};
