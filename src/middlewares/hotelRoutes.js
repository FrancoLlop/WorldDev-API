const {Router} = require('express')
const {Hotel} = require('../models/Hotel')
const {CreateHotel} = require('../controllers/hotel')
const router = Router()

router.get('/', async (req, res, next)=>{
    const {name} = req.query

    try {
       if(name){
            res.json( await Hotel.find({name:name}))
        }else{
            res.json( await Hotel.find({}))
        } 
    } catch (error) {
        next(error)
    }   
})

router.get('/:id', async(req,res,next) =>{
    const {id} = req.params

    try {
        return res.json(await Hotel.findById(id))
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req,res,next)=>{
    try {
        res.json( await CreateHotel(req.body))
    } catch (error) {
        next(error)
    }
})

module.exports = router