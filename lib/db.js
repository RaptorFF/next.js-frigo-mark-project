import { Pool } from "pg";

// Singleton pool pattern to prevent too many connections during hot reload in dev
let pool;

if (!global._pgPool) {
  global._pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

pool = global._pgPool;

export default pool;
