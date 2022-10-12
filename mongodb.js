
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const database = 'college';
const db_coll = 'student';

async function  dbConnect(){
    let dbconn = await client.connect();
    db = dbconn.db(database);
    return db.collection(db_coll);
}

module.exports = dbConnect;
