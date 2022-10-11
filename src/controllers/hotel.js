const {Hotel} = require('../models/Hotel')

async function CreateHotel({name, image, qualification, description, location, services}){
   const hotel = new Hotel({
  name: name,
  image: image,
  qualification: qualification,
  description: description,
  location: location,
  services: services
})

hotel.save()
.then(result => {
  console.log(result)
  mongoose.connection.close()
})
.catch( err => {
  console.log(err)
})
    return 'Hotel created'
}

module.exports = {
   CreateHotel
}