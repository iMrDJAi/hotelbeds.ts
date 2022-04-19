import 'dotenv/config'
import { Client } from './'
import type { AxiosError } from 'axios'


const client = new Client({
  apiKey: process.env.API_KEY!,
  secret: process.env.SECRET!
})

client.status()
  .then(res => console.log(JSON.stringify(res.data, undefined, 2)))
  .catch((err: AxiosError) => console.error(JSON.stringify(err.response!.data, undefined, 2)))
