import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_gnLvXIwWU43d@ep-green-wind-ae5tvnyj-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

// const pgClient = new Client({
//     user: "neondb_owner",
//     password:"npg_gnLvXIwWU43d",
//     port: 5432,
//     host:"ep-green-wind-ae5tvnyj-pooler.c-2.us-east-2.aws.neon.tech",
//     database: "neondb"
// })

async function main(){
    await pgClient.connect();
    console.log("Database connected successfully !!");
    const response = await pgClient.query('SELECT * FROM usersnew')
    console.log(response)
}

main()