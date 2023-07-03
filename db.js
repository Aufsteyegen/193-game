import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const db_password = process.env.DB_PASSWORD

const pool = new Pool({
  user: 'postgres',
  password: db_password,
  host: 'localhost',
  port: 5432,
  database: 'webgame193',
})

export default pool
