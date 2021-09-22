const { override, useEslintRc, disableChunk } = require('customize-cra');
const path = require('path');

module.exports = override(
  useEslintRc(path.resolve(__dirname, '../../.eslintrc.json')),
  disableChunk()
);