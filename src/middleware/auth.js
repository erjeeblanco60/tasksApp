const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req,res,next) => {
    try{ 
            //getting the header token
            const token = req.header('Authorization').replace('Bearer ','')
            //verifying the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //finding the owner of the token
            const user = await User.findOne({_id: decoded._id,'tokens.token': token  })
            
        if(!user) {

            throw new Error ()
        }
        //letting the route handler to run
        req.token = token
        req.user = user
        next()
        //or throw an error
    }catch(error) {
        res.status(401).send({error: 'please authenticate' })
    }

}

module.exports = auth