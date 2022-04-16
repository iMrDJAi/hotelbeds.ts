import 'dotenv/config'
import { Client } from './'
import type { AxiosError } from 'axios'


const client = new Client({
  apiKey: process.env.API_KEY!,
  secret: process.env.SECRET!,
  baseURL: 'https://api.test.hotelbeds.com/hotel-api/1.0'
})

client.get('/status')
  .then(res => console.log(res.data))
  .catch((err: AxiosError) => console.error(err.response!.data))
