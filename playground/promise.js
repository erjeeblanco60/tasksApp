require('../src/db/mongoose')
const User = require('../src/models/user')
const { count } = require('../src/models/user')

// 5f4237be31b7a118f0dd5877

User.findByIdAndUpdate('5f422ea81e261e18a01788d9', {age: 1}).then((result)=>{
    console.log(result)
    return User.countDocuments({age: 1})
    }).then((result2)=> {
        console.log(result2)

 
    }).catch((error)=> {
        console.log(error)
    }) 

    
    const updateAgeandCount = async (id, age) => {

         await User.findByIdAndUpdate(id, {age})
          await User.countDocuments({age})
            return count
        
    }
    updateAgeandCount('5f422ea81e261e18a01788d9', 6).then((count) => {

        console.log(count)

    }).catch((error)=> {
        console.log(error)

    })