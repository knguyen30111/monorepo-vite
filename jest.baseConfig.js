module.exports = {
  preset: 'ts-jest',
  verbose: true,
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  reporters: ['default', 'jest-junit'],
  rootDir: './',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  // No need it for now but maybe in the future we need this 
  // transform: {
  //   '^.+\\.(js|ts|tsx)$': 'ts-jest',
  //   // https://jestjs.io/docs/en/webpack#mocking-css-modules
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '../../fileTransformer.js',
  // },
  maxWorkers: 4,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
