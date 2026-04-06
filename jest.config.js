export default {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/add.js',
    'src/divide.js',
    'src/clamp.js',
    'src/ceil.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};