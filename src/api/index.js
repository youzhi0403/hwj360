import { get } from './helpers'
const getSeckillGoods = get('api/seckillGoods')
const getCW = get('api/CW')
const getMedicalD = get('api/medicalD')
const getHouseholdD = get('api/householdD')
const getHealthF = get('api/healthF')
const getClassifyD = get('api/classifyData')
const getFoodD = get('api/foodData')

const getGoodsList = get('api/goodsList')
const getType = get('api/type')
const getIllness = get('api/illness')
const getBody = get('api/body')
const getIntegralGoods = get('api/integralGoods')

export {
  getSeckillGoods,
  getCW,
  getMedicalD,
  getHouseholdD,
  getHealthF,
  getClassifyD,
  getFoodD,
  getGoodsList,
  getType,
  getIllness,
  getBody,
  getIntegralGoods
}
