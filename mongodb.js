
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.objectID

const {MongoClient, objectID, ObjectID} = require('mongodb')



//connection
const connectionURL = 'mongodb://127.0.0.1:27017'
//Create the db 
const databaseName = 'task'        


//MongoClient.connect(url, option,callback )
MongoClient.connect(connectionURL, { useNewUrlParser: true,useUnifiedTopology: true }, (error, client) => {
if (error)
{
    return console.log('Unable to connect!')

} 

const db = client.db(databaseName)



})

// db.collection('task').deleteOne({
//     description: 'Clean the house'
// }).then((result) => {
// console.log('Deleted', result)
// }).catch((error) => {
// console.log('Error', error)

// })

// db.collection('users').deleteMany({
//     age: 23
// }).then((result)=>{
//     console.log('Deleted', result)

// }).catch((error)=> {
//     console.log('error', error)

// })

// db.collection('task').updateMany({
//     completed: false
// },{
//     $set:{
//         completed: true
//     }

// }).then((result)=> {
//     console.log('Sucess',result)

// }).catch((error)=> {
//     console.log('ERROR',error)

// })


// db.collection('users').updateOne({
//     _id: new ObjectID ("5f40f4872830142574e5125c")
//    }, {
//   $inc:{
//       age: 1
//   }

// }).then((result) =>{
//    console.log(result)
// }).catch((error)=> {
//    console.log(error)

// })

//     db.collection('task').findOne({ _id: new ObjectID("5f40d1d56f0e3b2ffcb0b95c")

//     } ,(error,result) => {
//         console.log(result)

//     })
//     db.collection('task').find({completed: false}).toArray((error,result) => {
//         console.log(result)


// })


   //Find one documents

    // db.collection('users').findOne({ 
    // _id: new ObjectID("5f40c52bafd0d01500870b23")    
    // }, (error, result)=>{
    //     if(error) {
    //         return console.log('Unable to find user')
    //     }
    //         console.log(result)
    // })

    //find many documents
    // db.collection('user').find({age: 22 }).toArray((error, result)=> {
    //     console.log(result)
    // })
    // //find counts
    // db.collection('user').find({age: 22 }).count((error, result)=> {
    //     console.log(result)
    // })


// db.collection('users').insertOne({
 
//    name: 'erjee',
// age: 22

// }, (error, result) => {
// if(error) {
//     return console.log('Unable to insert')

// }       //ops array object
//         console.log(result.ops)
// })       


//Method db to use database 'task

//     db.collection('task').insertMany([
//         {
//             description: 'Clean the house',
//             completed: true
//         }, {
//             description: 'Renew Inspection',    
//             completed: false
//         },{
//             description: 'Pot plants',
//             completed: false
//         }

//     ],(error, result) => {
//         if (error) {
//             return console.log('Unable to insert')
//         }
//             console.log(result.ops)

//     })

//closing for db connection

//                                         //insertOne (docs, option, callback ) //dump the result to callback 



// db.collection('users').insertMany([
//     {
//         name: 'Raizethy',
//         age: 22
//     },{
//         name: 'Conchas',
//         age:    22
//     }


// ], (error,result) => {
//     if(error) {
//         return console.log('Unable to insert')

//     }
//         console.log(result.ops)


// })







