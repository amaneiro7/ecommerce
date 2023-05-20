import dotenv from 'dotenv'

const env: string = process.env.NODE_ENV ?? 'dev'
const envs: Record<string, string> = {
  dev: '.env',
  e2e: '.env.e2e'
}

const options: { path?: string } = {}

if (envs[env]) {
  options.path = envs[env]
}

dotenv.config(options)

export const config = {
  accessToken: process.env.MP_ACCESS_TOKEN,
  integratorId: process.env.MP_INTEGRATOR_ID,
  port: process.env.PORT ?? 3000,
  apiUrl: process.env.API_URL,
  frontendUrl: process.env.FRONTEND_URL,
  gmail: {
    email: process.env.GMAIL_EMAIL,
    apiKey: process.env.GMAIL_APIKEY
  },
  mongodbUri: process.env.MONGODB_URI
}

console.log(config)
