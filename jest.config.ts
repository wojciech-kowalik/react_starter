/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const tsconfig = require('./tsconfig.json')
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  verbose: true,
  moduleNameMapper: {
    ...moduleNameMapper,
    '\\.(css|less)$': 'identity-obj-proxy',
  },
}
