const { Pool } = pg
let pool;

const db_password = process.env.DB_PASSWORD


if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  pool = new Pool({
    user: 'postgres',
    password: db_password,
    host: 'localhost',
    port: 5432,
    database: 'webgame193',
  });
}

export default pool;
