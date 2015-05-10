// console.log('help');

 $('document').ready(function () {


//  soundManager.onload = function(){soundManager.createSound({
//   id: ' ',
//   url: ' '
// });
//   soundManager.play('');





 // soundManager.createSound('carStart,'./audiofiles/english.mp3’);

// $(".carSound").on("click", soundManager.createSound('carStart,'./audiofiles/english.mp3’);




// soundManager.setup({
//  url: 'swf/',
//  onready: function() {
//   $("#carRev").on("click", function(){
//  var mySound = soundManager.createSound({
// id: 'carRev',
//  url: './audiofiles/english.mp3'
//   });
//   mySound.play();
// })
//  },
//  ontimeout: function() {
//  } 
// });

soundManager.setup({
 url: 'swf/',
 onready: function() {
$("#carStart").on("click", function(){
var mySound2 = soundManager.createSound({
id: 'carStart',
 url: './audiofiles/english.mp3'
 });
mySound2.play();
})
  },
 ontimeout: function() {
 }
});


});
//  },
//  ontimeout: function() {
//  }
// });
// ar mySound = soundManager.createSound({
// id: 'carStop',
//  url: './audiofiles/english.mp3'
//  });
// soundManager.play('carStop');
// var mySound = soundManager.createSound({
// id: 'carStop',
//  url: './audiofiles/english.mp3'
//  });
// soundManager.play('carStop');



 // mySound.play();
// });
//  },
//  ontimeout: function() {
//  }
//  });

//   $("#carStart").on("click", function(){
//  var mySound = soundManager.createSound({
// id: 'carStart',
//  url: './audiofiles/english.mp3'
//  });
//  mySound.play();
// });
//  },
//  ontimeout: function() {
//  }
//  });


  

 // soundManager.createSound('carStart,'./audiofiles/english.mp3’);




// $('English').on('click', soundManager.onload);



  
// }



//   $('.greeting').on("click", showGreeting);

// function showGreeting(){

//  // $('.greeting').on("click", function(){
//   console.log("click"); 
//  var output = "WDI 13 speaks:"  + $(this).attr('id');
//   $('p').text(output);

// }

// });