/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};
