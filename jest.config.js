// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   coverageDirectory: 'coverage',
//   collectCoverageFrom: ['src/**/*.{js,ts}'],
//   coverageThreshold: {
//     global: {
//       branches: 0,
//       functions: 0,
//       lines: 0,
//       statements: 0,
//     },
//   },
//   moduleNameMapper: {
//     'src/(.*)': '<rootDir>/src/$1',
//   },
//   moduleDirectories: ['node_modules', 'src'],
//   testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
// };

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
