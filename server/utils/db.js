import pg from 'pg'
import dotenv from "dotenv";
dotenv.config();

const {Pool}=pg;
 
// Create a connection pool
    const pool = new Pool({
        user:process.env.PG_USER,
        host: "dpg-co2g47ol6cac73bn1lhg-a.oregon-postgres.render.com",
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: 5432, // Default PostgreSQL port
});
 
// Check if the connection is successful
pool.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database!');
    }
});
 
export default pool;