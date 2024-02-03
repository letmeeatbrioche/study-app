const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://hmw:learningnext@cluster0.tjfork6.mongodb.net/?retryWrites=true&w=majority";

// Connect to the cluster and save it to a variable
const client = new MongoClient(uri);

// Perform operations on the cluster/database
// async function run() {
//   try {
//     // Create a database in the cluster/client called "gettingStarted",
//     //  save the database to a variable
//     const database = client.db('gettingStarted');

//     // Create a collection in the "gettingStarted" database called "people",
//     //   save the collection to a variable
//     const people = database.collection('people');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { views: 1250000 };
//     // Find a document
//     const person = await people.findOne(query);

//     console.log(person);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// Insert and retrieve a document
// async function run() {
//   try {
//     const database = client.db('gettingStarted');
//     const coll = database.collection('people');
//     const result = await coll.insertOne({
//       title: "Right Quick",
//       content: "It's never quick for me",
//     });
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);

//     // Query to find a particular document
//     const haikus = await coll.find();
//     const haikusArray = await haikus.toArray();
//     console.log('haikusArray:', haikusArray);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

// Retrieve inserted document
// async function run() {
//   try {
//     const database = client.db('gettingStarted');
//     const people = database.collection('people');
//     // Query to find a particular document
//     const query = { title: "Record of a Shriveled Datum" };
//     const haiku = await people.findOne(query);
//     console.log('haiku:', haiku);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);