var btn = document.getElementById("btn");

function getZip(){
   var zip = document.getElementById("zip").value;
   console.log(zip);
   return zip;
}


function getWeather(e) {

    e.preventDefault();
    console.log(getZip());
    let url = "https://api.openweathermap.org/data/2.5/weather?zip="+getZip()+",us&appid=51ab805081bb6d7bab3c4648633cea55";

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

        showWeather(data.name, data.main.temp, data.weather[0].description, data.weather[0].icon);

  });
}
function showWeather(cityname,temperature,condition, weathericon){
    var city = document.getElementById("city");
    city.textContent = cityname;

    var tempK = document.getElementById("tempK");
    tempK.textContent = temperature + " K ";
    var tempC = document.getElementById("tempC");
    tempC.textContent = Math.round(temperature - 273.15)  + " C ";
    var tempF = document.getElementById("tempF");
    tempF.textContent = Math.round((temperature - 273.15)* 9 / 5 + 32) + " F";

    var con = document.getElementById("con");
    con.textContent = condition;

    var icon = document.getElementById("icon");
    icon.setAttribute("src","http://openweathermap.org/img/wn/" + weathericon + "@2x.png");



}

btn.onclick = getWeather;