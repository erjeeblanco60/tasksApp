const express = require('express')
const validator = require('validator')
require('./db/mongoose')

const Task = require('./models/task')
const User = require('./models/user')

const { response } = require('express')

//User route
const userRouter = require('./routers/user')
//Task route
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT 
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('please upload word documents'))
//         }
//         cb(undefined,true)
//     }

// })
//     const errorMiddleware = (req,res,next) => {
//         throw new Error('From middle ware')
//     }

// app.post('/upload', upload.single('upload'), (req,res) => {
//     res.send()

// }, (error, req, res, next)=> {
//         res.status(400).send({error: error.message})
// })

//recognize the incoming Request Object as a JSON Object
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


 
app.listen(port, () => {
    console.log('Server is ip', port)
})



// const main = async () => {


// const Task = require('./models/task')
// const User = require('./models/user')

//   // const task = await Task.findById('5f4934e0adf4b93c90eff789')
//   // await task.populate('owner').execPopulate()
//   //  console.log(task.owner)
  
//    const user = await User.findById('5f492cedb38f953cb8770aff')
// await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }

// main()

// const pet = { 
//   name: 'mia'

// }

// console.log(JSON.stringify(pet))

// const myfunction = async () => {

// const jwt = require('jsonwebtoken')
//     const token = jwt.sign({_id: '123123'}, 'This is my new course', {expiresIn: '7 days'})     //create token
//     console.log(token)
//     const data =  jwt.verify(token, 'This is my new course' )                                                   //verify token
//     console.log(data)
//   }
//     myfunction()


// const bcript = require('bcryptjs')

// const myfunction = async () => {
//     const password = 'red'
//     const hashedpass = await bcript.hash(password, 8)
//     console.log(password)
//     console.log(hashedpass)

//   const ismatch =  await bcript.compare('red', hashedpass)
//   console.log(ismatch)

// }

// myfunction()