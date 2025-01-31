use('CraftShop')

// Insert Query
// db.brands.insertOne({"name": "OnePlus"})
// db.brands.insertMany([{"name":"HP"},{"name":"Dell"},{"name":"Microsoft"}])

// Find Query
db.brands.find()
db.brands.findOne({"name": "Google Pixel"})

// Projection Query
db.employees.find({},{_id: 0, salary: 0})

// Comparison Query
db.employees.find({salary: {$lte: 60000}})

// Logical Query Operator
db.employees.find({$and: [{salary: {$gt: 50000}},{city: "Los Angeles"}]})
db.employees.find({$and: [{ salary:{ $lte: 65000 }},{ city: { $not: { $eq: "Los Angeles" }}}]})

// Element Query Operatoor
db.brands.find({country: {$exists: true}})
db.employees.find({salary: {$type: 2}})

// Evaluation Query Operatoor
db.monthlyBudget.find({$expr:{$lt: ["$budget", "$spent"]}},{_id: 0})
db.monthlyBudget.find({budget: {$mod: [3, 0]}}, {_id: 0})
db.employees.find({name: {$regex: "son"}},{_id: 0})
db.monthlyBudget.find({$where: "this.budget > this.spent"})


db.monthlyBudget.find({},{_id: 0}).sort({category: 1})
db.brands.find({},{_id: 0}).count("total")
db.brands.find({},{_id: 0}).sort({"_id": -1}).limit(3)
db.brands.distinct("name")

// Delete Query
// db.brands.deleteOne({name: "Dell"})
// db.brands.deleteMany({name: "Microsoft"})
// db.employees.deleteMany({salary: {$in: [60000,65000,70000]}})