const product = require('../models/thing')

exports.createProduct = (req, res,next)=>{
    delete req.body._id
    const products = new product({
        ...req.body
    })
    products.save()
        .then(()=> res.status(201).json({message:'produit enregister'}))
        .catch(error=> res.status(400).json(error))
}

exports.deleteProduct = (req, res,next)=>{
    product.deleteOne({_id:req.params.id})
        .then(()=>res.status(200).json({message:'produit supprimé'}))
        .catch(error=>res.status(400).json(error))
}

exports.getAllProduct = (req, res,next) => {
    // récupération des données depuis la base de données ou un autre source
    product.find()
        .then(products=>res.status(200).json(products))
        .catch(error=>res.status(400).json(error))
    
    // renvoie les données au format JSON
 }