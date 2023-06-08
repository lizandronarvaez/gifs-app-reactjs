export default {
  // CUALQUIERA DE LOS DOS SIRVE
  // testEnvironment: 'jest-environment-jsdom',
  testEnvironment: 'jsdom',
  // 
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  }
}