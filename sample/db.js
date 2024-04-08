const { MongoClient } = require('mongodb');

let dbConnection;
let uri = "mongodb://robincharles:test12345@ac-cqclbqo-shard-00-00.jtvk55q.mongodb.net:27017,ac-cqclbqo-shard-00-01.jtvk55q.mongodb.net:27017,ac-cqclbqo-shard-00-02.jtvk55q.mongodb.net:27017/?ssl=true&replicaSet=atlas-yk52uf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
 
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb();
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            })
    },
    getDb: () => dbConnection 
}