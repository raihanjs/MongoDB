use('CraftShop')

db.help()
// Host info
db.hostInfo()
// Current Database name
db.getName()
// current connecting string
db.getMongo() 
db.currentOp()
// To Drop current Database
// db.dropDatabase()
db.getCollectionInfos()
db.getCollectionNames()


db.isMaster()
db.listCommands()
db.logout()
db.printCollectionStats()
db.serverBuildInfo()
db.serverStatus()
db.stats()
// db.version()

// To Create a new collection
// db.createCollection('employees')

// To Delete a collection
// db.employees.drop()