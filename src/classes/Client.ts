import axios from 'axios'
import sha256 from 'crypto-js/sha256'
import HEX from 'crypto-js/enc-hex'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StatusRS } from '../types/Status'


/** Options to authenticate and to customize the client */
interface ClientOptions {
  /** APItude API key */
  apiKey: string
  /** APItude API secret */
  secret: string
  /** Custom useragent to pass to Axios */
  userAgent?: string
  /** Customize the base URL of the hotel booking API */
  hotelBookingURL?: string
  /** Customize the base URL of the hotel Content API */
  hotelContentURL?: string
}

/**
 * A class containing the necessary methods to send API requests to the
 * the [APItude APIs](https://developer.hotelbeds.com/documentation/getting-started/).
 */
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

  status (): Promise<AxiosResponse<StatusRS>> {
    return this.get(`${this.hotelBookingURL}/status`)
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
