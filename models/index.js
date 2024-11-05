const models = {
    userModel : require('./nosql/users'),
    trackModel: require('./nosql/tracks'),
    storageMode: require('./nosql/storage')
}

module.exports = models;