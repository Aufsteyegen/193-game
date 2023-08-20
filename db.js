import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  password: process.env.DB_193_DATABASE_PASS,
  host: process.env.DB_193_DATABASE_HOST,
  port: 5432,
})

export default pool
