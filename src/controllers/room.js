const {Hotel} = require('../models/Hotel')

async function CreateRoom({id,name, image, discount, description, price, services,category}){

     await Hotel.updateOne({_id: id},{$push:{rooms:[
        {
        name: name,
        image:image,
        discount: discount,
        price:price,
        description:description,
        category:category,
        services:services
    }
    ]}
 },{new:true})
     return 'Room created'
 }

module.exports = {
    CreateRoom
 }