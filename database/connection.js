import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;
dotenv.config();

const database = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

async function testConnectionAndLog() {
  try {
    await database.connect();
    const databaseName = await database.query("SELECT current_database()");
    const currentDatabase = databaseName.rows[0].current_database;
    const now = await database.query("SELECT NOW()");
    const currentTime = now.rows[0].now;
    console.log(`Connected to ${currentDatabase} at ${currentTime}`);
  } catch (error) {
    console.error("Error connecting to database.", error);
  }
}

testConnectionAndLog();

export default database;
