const baseConfig = require('../../jest.baseConfig.js');
const testPathIgnorePatterns = ['/node_modules/'];

module.exports = {
  ...baseConfig,
  clearMocks: true,
  testPathIgnorePatterns,
};
