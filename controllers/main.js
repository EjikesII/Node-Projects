const jwt = require('jsonwebtoken')
const customAPIError = require('../errors/custom-error')

const login = async(req,res) => {
    const {username,password} = req.body
    console.log(username,password)
    
    if(!username || !password){
    throw new customAPIError('Please provide your email and/or password',400)
    }
    //Dummy skey due to lack of DB to provide the unique ID.
    const skey = Math.floor(Math.random() * 256)

    //small payload for better user experience
    const token = jwt.sign({skey,username},process.env.JWT_SECRET,{expiresIn:'20d'})
    res.status(200).json({msg:'Account Approved',token})
}

const dashboard = async (req,res) => {
    const randomKey = Math.floor(Math.random()* 256)
    res.status(200).json({msg:`Ihedioha`,secret:`your signed key is ${randomKey}`})
}

module.exports = {
    login, dashboard
}