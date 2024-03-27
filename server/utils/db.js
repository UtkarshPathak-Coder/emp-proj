import pg from 'pg'
import dotenv from "dotenv";
dotenv.config();

const {Pool}=pg;
 
// Create a connection pool
    const pool = new Pool({
        user:process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
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