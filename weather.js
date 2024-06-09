var input= document.querySelector("#cityname")
var btn=document.querySelector("#add")
var out=document.querySelector("#cityout")
var desc=document.querySelector("#description")
var temp=document.querySelector("#temp")
var wind=document.querySelector("#wind")
var appik="d4b87382ab11f1fffa06d07ea6e216d8"
function conv(val)
{
    return (val-273).toFixed(3)
}
btn.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+appik)
  .then(res=>res.json())
  .then(data=>
    {
    var nameval=data['name']
    var descr=data['weather']['0']['description']
    var windi=data['wind']['speed']
    var temperature=data['main']['temp']

    out.innerHTML = 'weather of <span> '+nameval+' </span>'
    temp.innerHTML = 'temparature: <span> '+conv(temperature)+' C<span>'
    desc.innerHTML = 'sky conditions: <span> '+descr+' <span>'
    wind.innerHTML = 'windspeed: <span> '+windi+' <span>'
  })
  .catch(err=>alert('entered wrong city name'))

})