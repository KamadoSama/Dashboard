
const bcrypt = require('bcrypt')
const user = require('../models/user')
const jwt = require('jsonwebtoken')

exports.sigup = (req,res,next)=>{
    
    bcrypt.hash(req.body.password,10)
        .then(hash=>{
            const user = new User(
                {
                    email: req.body.email,
                    password: hash
                }
            )
            user.save()
                .then(()=>res.status(201).json({message:'Utilisateur créé !'}))
                .catch(error=> res.status(400).json({message:"c'est bizareee"}))
        })
        .catch(error=>res.status(500).json({message:'tu zayes hein'}))
}

exports.login = (req,res,next)=>{
    
    user.findOne({email: req.body.email})
        .then(user=>{
            if(!user){
               
                return res.status(401).json({error:"mot de passe ou email incorrect"})
            }else{
                
                bcrypt.compare(req.body.password,user.password)
                .then(valid=>{
                    
                    if(!valid){
                        
                        return res.status(401).json({error:"mot de passe"})
                    }else{
                        res.status(200).json({
                        
                        UserId: user._id,
                        token:jwt.sign(
                            {UserId: user._id},
                            'M@_CH@INE_DE_S£CR£T',
                            {expiresIn:'1h'}
                        )
                    })}       
                })
                .catch(error=>{
                    
                    res.status(500).json({error})
                })
            }
        })
        .catch(error=>{
            
            res.status(500).json({error})
        })
}

exports.getAllUser = (req,res,next)=>{
    user.find()
    .then(user=>res.status(200).json(user))
    .catch(error=>res.status(400).json({error}))
}

