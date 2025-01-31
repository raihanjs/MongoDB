### MongoDB Queries

## Insert Query
- db.collectionName.insertOne(obj)
- db.collectionName.insertMany(arrayOfObject)

## Find Query
- db.brands.find()
- db.brands.findOne(obj)

## Projection
আমার যদি এমন কিছু দরকার হয় যে আমি কোন একটি কালেকশনের প্রতিটি ডকুমেন্ট এর নির্দিষ্ট ফিল্ডের ডাটা দেখতে চাচ্ছি বা চাচ্ছি না তখন আমরা প্রজেকশনের মাধ্যমে তা করতে পারি। এর জন্য অই ফিল্ডের নাম দিয়ে যদি 0 লিখি তার মানে আমরা অই ফিল্ড দেখতে চাচ্ছি না আর যদি 1 দেই তাহলে আমরা অই ফিল্ড দেখতে চাচ্ছি। 
- db.employees.find({},{_id: 0, name: 1, salary: 1})

## Comparison Operator
- $eq -- Equal To Operator -- db.employees.find({salary: {$eq: 75000}})
- $lt -- Less Than Operator -- db.employees.find({salary: {$lt: 75000}})
- $lte -- Less Than or Equal To Operator -- db.employees.find({salary: {$lte: 75000}})
- $gt -- Greater Than Operator -- db.employees.find({salary: {$gt: 75000}})
- $gte -- Greater Than or Equal To Operator -- db.employees.find({salary: {$gte: 75000}})
- $ne -- Not Equal To Operator -- db.employees.find({salary: {$ne: 75000}})
- $in -- In Operator -- db.employees.find({salary: {$in: [60000,80000,90000]}})
- $nin -- Not In Operator -- db.employees.find({salary: {$nin: [60000,80000,90000]}})

## Logical Query Operator
- $and -- Logical AND Operator -- db.employees.find({$and: [{salary: {$gt: 60000}},{city: "Los Angeles"}]})
- $or -- Logical OR Operator -- db.employees.find({$or: [{salary: {$gt: 60000}},{city: "Los Angeles"}]})
- $not -- Logical NOT Operatation -- db.employees.find({$and: [{ salary:{ $lte: 65000 }},{ city: { $not: { $eq: "Los Angeles" }}}]})
- $nor -- Logical NOR Operatation -- db.employees.find({$nor: [{ salary: { $gt: 60000 }}]})

## Element Query Operatoor
- $exists: db.brands.find({country: {$exists: true}})
- $type: db.employees.find({salary: {$type: 2}})

# MongoDB Data Types and Their Numbers

| Type        | Number |
|-------------|--------|
| `Double`    | 1      |
| `String`    | 2      |
| `Object`    | 3      |
| `Array`     | 4      |
| `Binary`    | 5      |
| `Undefined` | 6      |
| `ObjectId`  | 7      |
| `Boolean`   | 8      |
| `Date`      | 9      |
| `Null`      | 10     |
| `RegExp`    | 11     |
| `JavaScript`| 13     |
| `Symbol`    | 14     |
| `Int`       | 16     |
| `Timestamp` | 17     |
| `Long`      | 18     |
| `Decimal128`| 19     |
| `MinKey`    | -1     |
| `MaxKey`    | 127    |

## Evaluation Query Operatoor
- $expr -- aggregation -- db.monthlyBudget.find({$expr:{$lt: ["$budget", "$spent"]}},{_id: 0})
- $jsonSchema -- validate doc against given JSON Schema
- $mod -- perform a modular operation -- db.monthlyBudget.find({budget: {$mod: [3, 0]}})
- $regex -- selects doc where values match a specified reg expression -- db.employees.find({name: {$regex: "son"}},{_id: 0})
- $text -- perform text search --
- $where -- Matches documents that satisfy a JS Expression -- db.monthlyBudget.find({$where: "this.budget > this.spent"})

## Sort Limit Distinct & Row Count
- sort -- db.monthlyBudget.find({},{_id: 0}).sort({category: 1})
- count -- db.brands.find({},{_id: 0}).count("total")
- limit -- db.brands.find({},{_id: 0}).sort({"_id": -1}).limit(3)
- distinct -- db.brands.distinct("name")

## Delete Query
- deleteOne -- db.brands.deleteOne({name: "Dell"})
- deleteMany -- db.employees.deleteMany({salary: {$in: [60000,65000,70000]}}) 