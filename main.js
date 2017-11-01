$(document).ready(function(){
    
    // DocGotGame stream
    // Original API link
    var urlDoc="https://wind-bow.gomix.me/twitch-api/streams/docgotgame?callback=?";
    // Function to display status based on 'stream' value when accessed
    $.getJSON(urlDoc, function(data1){
      // If null AKA offline, display "Offline"
      if(data1.stream===null) {
        $('#docStatus').html("<p id=\"offline\">Offline</p>");
      }
      // If not, aka online, display "Live" with little icon
      else {
        $('#docStatus').html("Live"+"<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>");
        // Also display what game is being played when live
        var game = data1.stream.game;
        $('#docGame').html(game)
      }
      
    });
    // From here the code is repeated for different twitch users
    
    // FreeCodeCamp stream
    var urlFcc="https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?";
    $.getJSON(urlFcc, function(data1){
      if(data1.stream===null) {
        $('#fccStatus').html("<p id=\"offline\">Offline</p>");
      }
      else {
        $('#fccStatus').html("Live"+"<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>");
        var game = data1.stream.game;
        $('#fccGame').html(game)
      }
    
    });
    // ESL SC2 stream
    var urlEsl="https://wind-bow.glitch.me/twitch-api/streams/esl_sc2?callback=?";
    $.getJSON(urlEsl, function(data1){
      if(data1.stream===null) {
        $('#eslStatus').html("<p id=\"offline\">Offline</p>");
      }
      else {
        $('#eslStatus').html("Live"+"<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>");
        var game = data1.stream.game;
        $('#eslGame').html(game)
      }
    
    });
    // Fragnance stream
    var urlfrag="https://wind-bow.glitch.me/twitch-api/streams/fragnance?callback=?";
    $.getJSON(urlfrag, function(data1){
      if(data1.stream===null) {
        $('#fragStatus').html("<p id=\"offline\">Offline</p>");
      }
      else {
        $('#fragStatus').html("Live"+"<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>");
        var game = data1.stream.game;
        $('#fragGame').html(game)
      }
    
    });
    // AnnieFuchsia stream
    var urlAnnie="https://wind-bow.glitch.me/twitch-api/streams/anniefuchsia?callback=?";
    $.getJSON(urlAnnie, function(data1){
      if(data1.stream===null) {
        $('#annieStatus').html("<p id=\"offline\">Offline</p>");
      }
      else {
        $('#annieStatus').html("Live"+"<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>");
        var game = data1.stream.game;
        $('#annieGame').html(game)
      }
    });
  
  });