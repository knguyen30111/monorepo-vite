const baseConfig = require('../../jest.baseConfig.js');
const setupFiles = ['react-app-polyfill/jsdom'];
const setupFilesAfterEnv = ['@testing-library/jest-dom/extend-expect'];
const testEnvironment = 'jest-environment-jsdom-fourteen';
const testPathIgnorePatterns = ['/node_modules/'];

module.exports = {
  ...baseConfig,
  clearMocks: true,
  setupFiles,
  setupFilesAfterEnv,
  testEnvironment,
  testPathIgnorePatterns,
};
