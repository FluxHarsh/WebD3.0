import { Client } from 'pg';
const pgClient = new Client('postgresql://neondb_owner:npg_gnLvXIwWU43d@ep-green-wind-ae5tvnyj-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
async function main() {
    await pgClient.connect();
    const response = await pgClient.query('SELECT * FROM users');
    console.log(response);
}
main();
//# sourceMappingURL=index.js.map