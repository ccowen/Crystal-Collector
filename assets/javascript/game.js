$(document).ready(function() {

  var audioElement = document.createElement("audio");

  audioElement.setAttribute("src", "assets/music/loop.mp3");

  $(".theme-button").on("click", function() {
  audioElement.play();
  });

  $(".pause-button").on("click", function() {
  audioElement.pause();
  });

  function reset() {

    targetNumber = Math.floor(Math.random() * 109) + 12;
    $("#number-to-guess").text(targetNumber);

    counter = 0;

    numberOptions = [Math.floor(Math.random() * 13), 
    Math.floor(Math.random() * 13), 
    Math.floor(Math.random() * 13), 
    Math.floor(Math.random() * 13)
    ];

  }

  var targetNumber = Math.floor(Math.random() * 109) + 12;
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  $("#score").text(counter);
  
  var wins = 0;
  $("#wins").text(wins);

  var loses = 0;
  $("#loses").text(loses); 

  var numberOptions = [Math.floor(Math.random() * 12) + 1, 
  	Math.floor(Math.random() * 12) + 1, 
  	Math.floor(Math.random() * 12) + 1, 
  	Math.floor(Math.random() * 12) + 1
  	];

  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", 'assets/images/crystal'+[i]+'.png');
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    var alertSnd = new Audio('assets/music/alert.mp3');
    alertSnd.play();

    if (counter === targetNumber) {
      var winSnd = new Audio('assets/music/win.mp3');
      winSnd.play();
      wins++;
      $("#wins").text(wins);
      reset();
    }

    else if (counter >= targetNumber) {
      loses++;
      $("#loses").text(loses);
      reset();
    }

    $("#score").text(counter);

  });

});
