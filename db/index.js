const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://hmw:learningnext@cluster0.tjfork6.mongodb.net/?retryWrites=true&w=majority";

// Connect to the cluster and save it to a variable
const client = new MongoClient(uri);

// Perform operations on the cluster/database
async function run() {
  try {
    // Create a database in the cluster/client called "gettingStarted",
    //  save the database to a variable
    const database = client.db('gettingStarted');

    // Create a collection in the "gettingStarted" database called "people",
    //   save the collection to a variable
    const people = database.collection('people');

    // Query for a movie that has the title 'Back to the Future'
    const query = { views: 1250000 };
    // Find a document
    const person = await people.findOne(query);

    console.log(person);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);