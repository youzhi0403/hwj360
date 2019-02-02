import { get } from './helpers'
const getSeckillGoods = get('api/seckillGoods')
const getCW = get('api/CW')
const getMedicalD = get('api/medicalD')
const getHouseholdD = get('api/householdD')
const getHealthF = get('api/healthF')

export {
  getSeckillGoods,
  getCW,
  getMedicalD,
  getHouseholdD,
  getHealthF
}
