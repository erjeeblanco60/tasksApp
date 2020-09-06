require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findOneAndDelete('5f4238da3ba42b1f2cde52f0').then((result)=>{
    console.log(result)
return Task.countDocuments({completed: false})

}).then((result2)=> {

    console.log(result2)

}).catch((error)=> { 

    console.log(error)

})

 const tasktodelete = async (id) => {
          const taskto =  await Task.findByIdAndDelete(id)
          const count = await Task.countDocuments({ completed: false })
          return count
 }

 tasktodelete('5f4238da3ba42b1f2cde52f0').then((result) => {
        console.log(result)


 }).catch((error)=> {

    console.log('Error!!',error)
 })