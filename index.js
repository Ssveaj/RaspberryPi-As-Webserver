$.ajax ({
    url: "https://api.openweathermap.org/data/2.5/weather?q=Örebro,se&mode=json&units=metric&lang=sv&appid=YOURAPPID",
    type: "GET",
    dataType: 'json',
    success: function(e) {
  
  
      var weather = '';
  
      weather += '<div class="row h-100">';
      weather += '   <div class="col-sm-3 h-100">';
      weather += '       <div class="flexbox-weather d-flex justify-content-center d-flex align-items-start">';
      weather += '           <canvas class="icon" width="128" height="128"></canvas>';  
      weather += '        </div>';
      weather += '      <div class="flexbox-temp d-flex justify-content-center d-flex align-items-end">';
      weather +=             e.main.temp + '°C';
      weather += '      </div>';
      weather += '   </div>';
  
      weather += '   <div class="col-sm-6 h-100">';
      weather += '      <div class="flexbox-clock d-flex justify-content-center">';
      weather += '           <div id="clock"></div>';
      weather += '      </div>';
      weather += '      <div class="flexbox-date d-flex justify-content-center">';
      weather += '           <div id="date"></div>';
      weather += '      </div>';
      weather += '      <div class="flexbox-description d-flex justify-content-center">';
      weather +=               e.weather[0].description;
      weather += '      </div>';
      weather += '   </div>';
  
      weather += '   <div class="col-sm-3 h-100 d-flex justify-content-center d-flex align-items-end" id="swipeLeft">';
      weather += '      <div class="flexbox-details">';
      weather +=             '<p> Fuktighet: ' + e.main.humidity + ' %'+ '</p>';
      weather +=             '<p> Vind: ' + e.wind.speed + ' m/s' + '</p>';
      weather += '      </div>';
      weather += '   </div>';
      weather += '</div>';
  
  $('#showWeather').html(weather);
  
  let icon = e.weather[0].icon;
  
            switch (icon) {
              case "01d":
                icon = "CLEAR_DAY";
                break;
              case "01n":
                icon = "CLEAR_NIGHT";
                break;
              case "02d":
                icon = "PARTLY_CLOUDY_DAY";
                break;
              case "02n":
                icon = "PARTLY_CLOUDY_NIGHT";
                break;
              case "03d":
                icon = "CLOUDY";
                break;
              case "03n":
                icon = "CLOUDY";
                break;
              case "04d":
                icon = "CLOUDY";
                break;
              case "04n":
                icon = "CLOUDY";
                break;
              case "09d":
                icon = "RAIN";
                break;
              case "09n":
                icon = "RAIN";
                break;
              case "10d":
                icon = "RAIN";
                break;
              case "10n":
                icon = "RAIN";
                break;
              case "11d":
                icon = "RAIN";
                break;
              case "11n":
                icon = "RAIN";
                break;
              case "13d":
                icon = "SNOW";
                break;
              case "13n":
                icon = "SNOW";
                break;
              case "50d":
                icon = "FOG";
                break;
              case "50n":
                icon = "FOG";
                break;
            }       
            setIcons(icon, document.querySelector(".icon"));
            
         function setIcons(icon, iconID) {
           const skycons = new Skycons({ color: "white" });
           const currentIcon = icon;
            skycons.play();
          return skycons.set(iconID, Skycons[currentIcon]);
        }
      }
  });
  
  
  function displayTime() {
      var time = moment().format('HH:mm');
      $('#clock').html(time);
      setTimeout(displayTime, 1000);
  }
  $(document).ready(function() {
      displayTime();
  });
  
  function date() {
    $('#date').html(moment().lang("sv").format('D MMMM YYYY'));
  }
  setInterval(date, 1000);
  
  
  var swipeleft = document.getElementById('swipeLeft');
  swipeleft.addEventListener('click', function() {
    document.location.href = 'matsedel.html';
  });
   