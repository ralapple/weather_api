


if (!navigator.geolocation) {
  console.error(`Your browser doesn't support Geolocation`);
}


navigator.geolocation.getCurrentPosition(onSuccess, onError)

function onSuccess(position) {
  getWeather()
}

function onError() {
  console.log("Error")
}


function getWeather() {

  fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data)
    //console.log(data.city);
    var city = data.city
    var state = data.principalSubdivision
    document.getElementById('location').innerHTML = city + ", " + state
  })
  .catch(function (err) {
    console.log(err);
  });
  
  

  fetch('https://api.weather.gov/gridpoints/MPX/108,71/forecast')
  .then(function (response) {
    return response.json();
  })

    
  .then(function (data1){
    const delay = ms => new Promise(res => setTimeout(res, ms));
    for (let i = 0; i< 12; i += 2)
    {
      var temp = data1.properties.periods[i].temperature
      var forecast = data1.properties.periods[i].shortForecast
      var windSpeed = data1.properties.periods[i].windSpeed
      var windDirection = data1.properties.periods[i].windDirection
      if (i == 0){
        var str = temp +"F, "+ forecast + ", Wind:" + windSpeed + " " +windDirection
      }
      else{
        var str = temp; 
      }
      if (str == null){
      document.getElementById('t'+(i/2)).innerHTML = null
      } else{
         document.getElementById('t'+(i/2)).innerHTML = str
    }
      
    }
    // var temp = data1.properties.periods[0].temperature
    // var forecast = data1.properties.periods[0].shortForecast
    // var windSpeed = data1.properties.periods[0].windSpeed
    // var windDirection = data1.properties.periods[0].windDirection

    // var str = temp +"F, "+ forecast + ", Wind:" + windSpeed + " " +windDirection
    // if (str == null){
    //   document.getElementById('temp').innerHTML = null
    // } else{
    //      document.getElementById('temp').innerHTML = str
    // }
    // console.log(temp, forecast, windSpeed, windDirection)
    // console.log("hello")
    // console.log(data1.properties.periods.length)

  })
  .catch(function (err) {
    console.log(err);
  });

  



}
