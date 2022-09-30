


if (!navigator.geolocation) {
    console.error(`Your browser doesn't support Geolocation`);
}
function onSuccess(position){
  const{
    latitude,
    longitude
  } = position.coords
  var lat = latitude
  var long = longitude
  //console.log(latitude)
  //console.log(longitude)
  getWeather(lat,long)
}

function onError(){
  console.log("Error")
}



document.getElementById('button').onclick = function() {
  console.log("Clicked")
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
}

function getWeather(lat, long){
  console.log(lat)
  console.log(long)
  document.getElementById('lat').innerHTML = lat
  document.getElementById('long').innerHTML = long
  fetch('https://api.weather.gov/points/'+lat+','+long)
    .then(resp => resp.json())
    .then((json) => console.log(json))
  
}