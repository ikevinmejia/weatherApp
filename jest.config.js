module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    transform: { '\\.[jt]sx?$': 'babel-jest', "^.+\\.svg$": "jest-transformer-svg"}
}