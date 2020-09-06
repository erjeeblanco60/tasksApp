const mongoose = require('mongoose')

// /Users/erjee/mongodb/bin/mongod.exe --dbpath=/Users/erjee/mongodb-data

//MongoClient.connect(url, option,callback )
mongoose.connect(process.env.MONGOESDBKEY,{ 
     useNewUrlParser: true, 
     useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
 
//dberjeeconchas
//dbPasswordmngo12
// const task = mongoose.model('task', {
//     description: {
//         type: 'string',
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false                //default is false if value is not provided
//     }     
// })

// const Task = new task({
//     description: 'Learn mongoes library',
//     completed: false
// })


// Task.save().then((result)=>{
//     console.log(result)

// }).catch((error)=>{
// console.log(error)

// })