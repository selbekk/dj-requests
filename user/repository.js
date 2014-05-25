var mongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var log = new (require('basic-logger'))();

const DB_PROTOCOL = 'mongodb';
const DB_HOST = 'localhost';
const DB_PORT = '21017';
const DB_NAME = 'djrequests';
const USERS_COLLECTION = 'users';

var collection;

mongoClient.connect(DB_PROTOCOL + '://' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME, function(err, db) {
    if (err) {
        log.error('could not connect to database. Did you start it up?');
        throw err;
    }

    log.info('connected to database!');

    collection = db.collection(USERS_COLLECTION);
});

module.exports = {

    exists: function(username) {
        return !!this.get(username);
    },

    get: function(username) {
        collection.findOne( { username: username }, function(err, result) {
            if( err ) throw err;

            return result;
        });
    },

    add: function(obj) {
        console.log('adding object: ', obj);
        return true;
    },

    login: function(obj) {
        return true;
    }
};
