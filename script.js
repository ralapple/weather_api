


if (!navigator.geolocation) {
  console.error(`Your browser doesn't support Geolocation`);
}

function onSuccess(position) {
  getWeather()
}

function onError() {
  console.log("Error")
}

//Watches for button press
document.getElementById('button').onclick = function() {
  console.log("Clicked")
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
}


function getWeather() {

  fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data)
    console.log(data.city);
    var city = data.city
    var state = data.principalSubdivision
    document.getElementById('location').innerHTML = city + ", " + state
  })
  .catch(function (err) {
    console.log(err);
  });
  
  

  fetch('https://api.weather.gov/gridpoints/MPX/108,71/forecast/hourly')
  .then(function (response) {
    return response.json();
  })
  .then(function (data1) {
    var temp = data1.properties.periods[0].temperature
    var forecast = data1.properties.periods[0].shortForecast
    var windSpeed = data1.properties.periods[0].windSpeed
    var windDirection = data1.properties.periods[0].windDirection

    var str = temp +"F, "+ forecast + ", Wind:" + windSpeed + " " +windDirection
    
    document.getElementById('temp').innerHTML = str
    console.log(temp, forecast, windSpeed, windDirection)

  })
  .catch(function (err) {
    console.log(err);
  });



}