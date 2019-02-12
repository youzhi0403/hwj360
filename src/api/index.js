import { get } from './helpers'
const getSeckillGoods = get('api/seckillGoods')
const getCW = get('api/CW')
const getMedicalD = get('api/medicalD')
const getHouseholdD = get('api/householdD')
const getHealthF = get('api/healthF')
const getClassifyD = get('api/classifyData')
const getFoodD = get('api/foodData')

export {
  getSeckillGoods,
  getCW,
  getMedicalD,
  getHouseholdD,
  getHealthF,
  getClassifyD,
  getFoodD
}
