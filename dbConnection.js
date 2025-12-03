 const {MongoClient} require('mongodb');

let dbConnectionUrl =

const client = new MongoClient(dbConnectionUrl);

let dbConnection=async()=>{
 await client.connect();
 client.db("mongo")
}
module.exports={}