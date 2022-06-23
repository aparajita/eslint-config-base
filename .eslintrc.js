const config = require('./index.js')

module.exports = {
  root: true,
  ...config,
  parserOptions: {
    tsconfigRootDir: __dirname
  }
}
