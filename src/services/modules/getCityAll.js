import zzRequest from '../request'

export const getCityAll = async () => {
  return await zzRequest.get({ url: "/city/all" })
}

