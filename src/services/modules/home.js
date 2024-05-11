import zzRequest from '../request'

export function getHomeHighScoreData() {
  return zzRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeGoodPriceData() {
  return zzRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeDiscountData() {
  return zzRequest.get({
    url: "/home/discount"
  })
}

export function getHomeWonderfulPlaceData() {
  return zzRequest.get({
    url: "/home/hotrecommenddest"
  })
}