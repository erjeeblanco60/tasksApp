const express = require('express')
//const app = express()
const router = new express.Router()
const auth = require('../middleware/auth')
const {sendWelcomeEmail,sendCalcelationEmail } = require('../emails/account')
const User = require('../models/user')
const Task = require('../models/task')
const multer = require('multer')
const sharp = require('sharp')
const e = require('express')
const { findById } = require('../models/task')

 //ASYNC EXPRESS.JS
 router.post('/users', async (req, res) => {
    const user = new User(req.body)
    
    try {
        
                      await user.save()
                       sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})

    } catch (error) {
        res.status(400).send(error)
    }
     
        // user.save().then(()=> {
        //     res.status(201).send(user)
        // }).catch((error)=> {
        //     res.status(400).send(error)     

        // })
})
 
router.post('/users/logout', auth, async (req,res)=> {

    try{
        
        req.user.tokens = req.user.tokens.filter((token)=> {                //filtering a specific token 
            return token.token !== req.token                                
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()

    }

})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
            req.user.tokens = []                         //saving an empty array of token
            await req.user.save()
            res.send()
    } catch (error) {
            res.status(500).send()
    }


})

router.post('/users/login', async (req, res) => {
    try {

        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token})

    }catch (error) {
        res.status(400).send()
    }

})


////////// G E T /////////////////////

router.get('/users/me', auth , async (req,res)=> {
    res.send(req.user)
    // User.find({ }).then((user)=> {
    // res.send(user)

    // }).catch((error)=> {
    //     res.status(500).send()

    // })

})
////////// G E T /////////////////////


 router.patch('/users/me', auth , async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
       
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()


        // await user.save()
        // const myID = req.params.id
        // const user = await User.findByIdAndUpdate(myID, req.body, { new: true, runValidators: true })
    

        res.send(req.user)
        
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/users/me',auth , async (req , res)=> {

     //const userid = req.user._id
        // const user = await User.findByIdAndDelete(userid)

        // if(!user) {
        //     return res.status(404).send()
        // }

    
   
        try {
            await req.user.remove()
            sendCalcelationEmail(req.user.email, req.user.name)
            await Task.deleteMany({ owner: req.user._id})            //Delete user tasks when user is removed
            res.send(req.user)
        } catch (e) {
            res.status(500).send()
        }
    })
    

    const upload = multer({
        //dest: 'avatar',
        limits: { 
            fileSize: 1000000 
         }, 
         fileFilter(req, file, cb) {
            if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                return cb(new Error('please upload JPG Jpeg PNG'))
            }
            cb(undefined,true)
        }
        
    
    })

    router.post('/users/me/avatar', auth, upload.single('avatar'), async (req,res )=> {
       
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250}).png().toBuffer()
        req.user.avatar = buffer

        //req.user.avatar = req.file.buffer
      await req.user.save()  
      res.send()

    },(error, req, res ,next)=> {
        res.status(400).send({error: error.message})

    })


    router.delete('/users/me/avatar', auth, async(req,res)=> {
      
            req.user.avatar = undefined
            await req.user.save()
            res.send()
   
    })

    router.get('/users/:id/avatar', async (req,res)=> {
            try {
                const user = await User.findById(req.params.id)

                if( !user || !user.avatar) {
                    throw new Error()
                }
                    res.set('Content-Type','image/png')
                    res.send(user.avatar)
            }catch (error) {
                res.status(400).send()
            }
    })

module.exports = router