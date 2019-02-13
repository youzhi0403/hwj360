const appData = require('./data.json')

const seckillGoods = appData.seckillGoods
const CW = appData.CW
const medicalD = appData.medicalD
const householdD = appData.householdD
const healthF = appData.healthF

const classifyData = require('./classify').data
const foodData = require('./food')
const goodsList = require('./goodsList').data

const typeData = require('./type')

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before (app) {
      app.get('/api/seckillGoods', function (req, res) {
        res.json({
          data: seckillGoods
        })
      })
      app.get('/api/CW', function (req, res) {
        res.json({
          data: CW
        })
      })
      app.get('/api/medicalD', function (req, res) {
        res.json({
          data: medicalD
        })
      })
      app.get('/api/householdD', function (req, res) {
        res.json({
          data: householdD
        })
      })
      app.get('/api/healthF', function (req, res) {
        res.json({
          data: healthF
        })
      })
      app.get('/api/classifyData', function (req, res) {
        res.json({
          data: classifyData
        })
      })
      app.get('/api/foodData', function (req, res) {
        res.json({
          data: foodData
        })
      })
      app.get('/api/goodsList', function (req, res) {
        res.json({
          data: goodsList
        })
      })
      app.get('/api/type', function (req, res) {
        res.json({
          data: typeData
        })
      })
    }
  }
}
