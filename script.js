var test = document.getElementById("test")
if (!navigator.geolocation) {
    console.error(`Your browser doesn't support Geolocation`);
}
var location = navigator.geolocation.getCurrentPosition(onSuccess, onError)

function onSuccess(position){
  const{
    latitude,
    longitude
  } = position.coords
  console.log(latitude)
  console.log(longitude)
}


function onError(){
  console.log("Error")
}
document.getElementById('button').onclick = function() {
  console.log("Clicked")
  var city = document.getElementById('city').value
  var state = document.getElementById('state').value

  city = 44.9778
  state = -93.2650
  console.log(city + ", " + state)
  fetch('https://api.weather.gov/points/'+city+','+state)
    .then(resp => resp.json())
    .then((json) => console.log(json))
}

console.log()