import dotenv from 'dotenv'

dotenv.config()

export interface Secrets {
  PORT: String
}

const secrets: Secrets = {
  PORT: process.env.PORT as string,
}

export default secrets
