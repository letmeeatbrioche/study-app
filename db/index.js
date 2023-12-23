const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://hmw:learningnext@cluster0.tjfork6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('gettingStarted');
    const people = database.collection('people');

    // Query for a movie that has the title 'Back to the Future'
    const query = { views: 1250000 };
    const person = await people.findOne(query);

    console.log(person);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);