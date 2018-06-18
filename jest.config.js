module.exports = {
  setupFiles: ['<rootDir>/src/utils/jest/testSetup.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/utils/jest/styleMock.js',
    '\\.(jpe?g|png|gif|woff2?|eot|ttf|otf|svg)$':
      '<rootDir>/src/utils/jest/fileMock.js',
    'config/environment': '<rootDir>/src/utils/jest/environmentMock.js',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^toolbox(.*)$': '<rootDir>/src/components/toolbox$1'
  }
}
