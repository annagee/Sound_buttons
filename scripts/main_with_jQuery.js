

 $('document').ready(function () {




soundManager.onload = function() {
  soundManager.createSound("carRev", "./audiofiles/rev.wav");
  soundManager.createSound("carStart", "./audiofiles/CarStarting.wav");
  soundManager.createSound("carBreaking", "./audiofiles/BMW_braking_hard.wav");
  soundManager.createSound("carCornering", "./audiofiles/Car_cornering_quickly.wav");
  soundManager.createSound("carOnFire", "./audiofiles/caronfirewav");
  soundManager.createSound("playSong", "./audiofiles/bullitt_theme_tune.m4a");
};

$('#button-1').on("click", function(){
  soundManager.play("carRev");
});

$('#button-2').on("click", function(){
  soundManager.play("carStart");
});
  $('#button-3').on("click", function(){
  soundManager.play("carBreaking");
});
    $('#button-4').on("click", function(){
  soundManager.play("carCornering");
});
    $('#button-5').on("click", function(){
  soundManager.play("carOnFire");
});
    $('#button-6').on("click", function(){
  soundManager.play("playSong");

});
});

 




  
