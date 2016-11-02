$(document).ready(function() {
  function reload (){
    var colors = ["Medium Aquamarine", "Cyan", "Dark Turquoise", "Deep Sky Blue",
    "Aqua", "Light Sky Blue", "Medium Spring Green", "Aquamarine", "Medium Turquoise",
    "Cadet Blue"];
    var ranNum = randomNumber(0, 9);
    var colorThisTime = colors[ranNum];

    $('#blockArea').append('<div id="block1" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block2" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block3" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block4" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block5" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block6" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block7" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block8" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block9" class="colorBlock"></div>' + '<p></p>');
    $('#blockArea').append('<div id="block10" class="colorBlock"></div>' + '<p></p>');

    $("#block1").data({"colorId":0});
    $("#block2").data({"colorId":1});
    $("#block3").data({"colorId":2});
    $("#block4").data({"colorId":3});
    $("#block5").data({"colorId":4});
    $("#block6").data({"colorId":5});
    $("#block7").data({"colorId":6});
    $("#block8").data({"colorId":7});
    $("#block9").data({"colorId":8});
    $("#block10").data({"colorId":9});

    $('h1').append('<p id="targetColor"></p>');

    $('#targetColor').text(colorThisTime);

    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    $('.colorBlock').on('click', function(event) {
      $(this).addClass('animated wobble');
      if($(this).data("colorId") != ranNum){
        setTimeout(wrongAlert, 800);
       }else{
         $('#blockArea').empty();
         reload();
         alert("Well done. You may play again if you like.")
      }
    });

    function wrongAlert(){
      alert("Really? That's what you think "+colorThisTime+" looks like? Maybe"+
      " get an adult to help you and try again.");
    }

  };
  reload();
});
