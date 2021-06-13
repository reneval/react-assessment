const { defaults } = require('jest-config');

const config = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.(ts|js|jsx|es6)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^.+\\.(svg|(sa|sc|c)ss)$': 'identity-obj-proxy',
    '@(components|services)/(.*)$': '<rootDir>/src/$1/$2',
  },
  testEnvironment: 'jest-environment-jsdom-sixteen',
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
};

module.exports = { ...defaults, ...config };
