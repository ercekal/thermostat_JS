
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#powersavingstatus').text(thermostat._powerSaving);

  $('#cityselect').change(function(){
    var city = $('#cityselect').val();
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&apikey=ab3fb6e03b882629abec09934930699b";
    $.get(url, function(data) {
      $('#current').text(Math.round(data.main.temp-273));
    });
      $('#citydisplay').text(city);
    });

// var new_temp = thermostat._temperature;
// $('.range')

  $('#increase').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving').click(function() {
    thermostat.switchPowerSaving();
    $('#powersavingstatus').text(thermostat._powerSaving);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.displayEfficiency());
  }
  $('#slider').on('slideToggle', function(event) {
    console.log("hi");
    event.preventDefault();
    thermostat._temperature = 18;
    updateTemperature();
  });

});
