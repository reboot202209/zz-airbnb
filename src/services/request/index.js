import axios from 'axios'

import { BASE_URL, TIME_OUT } from './config'


class Request {
  constructor(baseURL, timeout) {
    //放在创建出来的对象上
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, (err) => {
      return err
    })
  }
  // 方法是放在原型上的

  // test() {
  //   console.log("test", this)
  // }

  // 这里的变量也是放在对象上的
  // request = async config => await this.instance.request(config)
  // get = async config => await this.request({ ...config, method: "get" })
  // post = async config => await this.request({ ...config, method: "post" })

  async request(config) {
    return await this.instance.request(config)
  }

  async get(config) {
    return await this.request({ ...config, method: "get" })
  }

  async post(config) {
    return await this.request({ ...config, method: "post" })
  }

}
const zzRequest = new Request(BASE_URL, TIME_OUT)
// console.log(zzRequest)
// zzRequest.test()
// const foo = zzRequest.test
// foo()
export default zzRequest