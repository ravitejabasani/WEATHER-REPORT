var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ="0776fee89716879811a73f06f8837806"
function convertion(value)
{
  return (value-273).toFixed(3)
}
btn.addEventListener('click',function()
{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputvalue.value+`&appid=`+apik)
  .then(res => res.json())
    
  .then(data =>

  {
    var nameval = data['name']
    var descripval = data['weather'][0]['description']
    var temperature = data['main']['temp']
    var windspeed = data['wind']['speed']
    
    city.innerHTML ='weather of' +' '+ nameval
    descrip.innerHTML = 'sky conditions:' +' '+ descripval
    temp.innerHTML = 'temperature:' +' '+ convertion(temperature) + 'c'
    wind.innerHTML = 'windspeed:'+ ' '+ windspeed +	'km/h'
    
    

  })
  .catch(err => alert('you entered wrong city name')
  )})