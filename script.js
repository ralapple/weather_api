var test = document.getElementById("test")
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