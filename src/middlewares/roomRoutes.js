const {Router} = require('express')
const {Hotel} = require('../models/Hotel')
const {CreateRoom} = require('../controllers/room')
const router = Router()

router.get('/', async (req, res, next)=>{
    const {name} = req.query
    try {
        if(name){
            let results = await Hotel.findOne({name:name})
                res.json(results.rooms)
        }else{
                res.json( (await Hotel.find({})).map(rm => rm.rooms).flat())
        } 
    } catch (error) {
        next(error)
    }
    
})
router.get('/:id', async(req,res,next) =>{
    const {id} = req.params
    try {
        return res.json((await Hotel.find({})).map(e => e.rooms).flat().find(e => e._id == id))
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req,res,next)=>{
    try {
        res.json( await CreateRoom(req.body))
    } catch (error) {
        next(error)
    } 
})

module.exports = router