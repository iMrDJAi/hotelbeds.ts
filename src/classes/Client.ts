import axios, { type AxiosInstance } from 'axios'
import sha256 from 'crypto-js/sha256'
import HEX from 'crypto-js/enc-hex'


interface Options {
  apiKey: string
  secret: string
  baseURL: string
  userAgent?: string
}

class Client {
  apiKey: string
  secret: string
  baseURL!: string
  userAgent?: string
  axios: AxiosInstance

  constructor (options: Options) {
    this.apiKey = options.apiKey
    this.secret = options.secret
    this.baseURL = options.baseURL || this.baseURL
    this.userAgent = options.userAgent
    this.axios = axios.create({
      baseURL: this.baseURL,
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip'
      }
    })
    this.axios.interceptors.request.use(config => {
      config.headers!['Api-key'] = this.apiKey
      config.headers!['X-Signature'] = this.signature
      if (this.userAgent) config.headers!['User-Agent'] = this.userAgent
      return config
    })
  }

  get signature () {
    return sha256(`${this.apiKey}${this.secret}${Math.floor(Date.now()/1000)}`).toString(HEX)
  }

  get request () { return this.axios.request }
  get get () { return this.axios.get }
  get delete () { return this.axios.delete }
  get head () { return this.axios.head }
  get options () { return this.axios.options }
  get post () { return this.axios.post }
  get put () { return this.axios.put }
  get patch () { return this.axios.patch }
}

export default Client
export type { Options }
