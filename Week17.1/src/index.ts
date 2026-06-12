import { Client } from "pg";

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
  const client = new Client(
    "postgresql://neondb_owner:npg_gnLvXIwWU43d@ep-green-wind-ae5tvnyj-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  );

  // const client = new Client({
  //     user: "neondb_owner",
  //     password:"npg_gnLvXIwWU43d",
  //     port: 5432,
  //     host:"ep-green-wind-ae5tvnyj-pooler.c-2.us-east-2.aws.neon.tech",
  //     database: "neondb"
  // })

  try {
    await client.connect(); // Ensure client connection is established
    const query = "SELECT * FROM usersnew WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log("No user found with the given email.");
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error("Error during fetching user:", err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser("harshjagtap@gmail.com").catch(console.error);
