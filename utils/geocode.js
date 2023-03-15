const request = require('request')

 

const geocode = (address,callback) =>{

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhdmVlbmtjIiwiYSI6ImNsZWxqbGx3YzAwMXQ0Mm9mcDg5NTdqMWsifQ.SaEZYQP21aEFT9_hrxYMdA';
  
 
 
  request({url:url,json:true},(error,response) =>{

    console.log('here', response.body.features.length);
 
    

    if(error){

      callback("Unable to connect services",undefined)

    } else if(response.body.features.length ==0){
      callback("Unable to find location. Please try another search",undefined)
    } else {
      callback(undefined,{
        longitude :response.body.features[0].center[0],
        latitude :response.body.features[0].center[1]
      })
    }

  })

}

module.exports = geocode;