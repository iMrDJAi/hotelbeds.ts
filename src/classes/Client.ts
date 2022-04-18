import axios, { type AxiosInstance } from 'axios'
import sha256 from 'crypto-js/sha256'
import HEX from 'crypto-js/enc-hex'


interface ClientOptions {
  apiKey: string
  secret: string
  userAgent?: string
  hotelBookingURL?: string
  hotelContentURL?: string
}

class Client {
  hotelBookingURL = 'https://api.test.hotelbeds.com/hotel-api/1.0'
  hotelContentURL = 'https://api.test.hotelbeds.com/hotel-content-api/1.0'

  apiKey: string
  secret: string
  userAgent?: string
  axios: AxiosInstance

  constructor (options: ClientOptions) {
    this.apiKey = options.apiKey
    this.secret = options.secret
    this.userAgent = options.userAgent
    this.hotelBookingURL = options.hotelBookingURL || this.hotelBookingURL
    this.hotelContentURL = options.hotelContentURL || this.hotelContentURL
    this.axios = axios.create({
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
export type { ClientOptions }
