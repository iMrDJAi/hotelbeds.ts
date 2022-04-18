import 'dotenv/config'
import { Hotels } from './'
import type { AxiosError } from 'axios'


const client = new Hotels({
  apiKey: process.env.API_KEY!,
  secret: process.env.SECRET!
})

client.currencies({})
  .then(res => console.log(JSON.stringify(res.data, undefined, 2)))
  .catch((err: AxiosError) => console.error(JSON.stringify(err.response!.data, undefined, 2)))
