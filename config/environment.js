const ENV = process.env.NODE_ENV
const CONFIG = {}

if (ENV === 'development') {
  CONFIG.apiURL = 'http://localhost:3000'
}

if (ENV === 'test') {
  CONFIG.apiURL = 'https://[testURL]'
}

if (ENV === 'production') {
  CONFIG.apiURL = 'https://[productionURL]'
}

module.exports = CONFIG
