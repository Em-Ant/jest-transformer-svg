module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': './tmp/index.js',
  },
};
