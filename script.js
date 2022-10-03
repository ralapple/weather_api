


if (!navigator.geolocation) {
  console.error(`Your browser doesn't support Geolocation`);
}

function onSuccess(position) {
  const {
    latitude,
    longitude
  } = position.coords
  var lat = latitude
  var long = longitude
  document.getElementById('lat').innerHTML = "Latitude: " + lat
  document.getElementById('long').innerHTML = "Longitude: " + long
  getWeather(lat, long)
}

function onError() {
  console.log("Error")
}

//Watches for button press
document.getElementById('button').onclick = function() {
  console.log("Clicked")
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
}


function getWeather(lat, long) {
  console.log(lat)
  console.log(long)
  /*
  fetch('https://api.weather.gov/points/' + lat + ',' + long)
    .then(resp => resp.json())
    .then((json) => console.log(json))
  */

  fetch('https://api.weather.gov/points/' + lat + ',' + long)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data)
    console.log(data.properties.timeZone);
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
    
    document.getElementById('temp').innerHTML = "Temperature: " + temp
    console.log(temp, forecast, windSpeed, windDirection)

  })
  .catch(function (err) {
    console.log(err);
  });

}