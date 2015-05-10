// console.log('help');

 $('document').ready(function () {


// // soundManager.onload = function(){soundManager.createSound({
// //    id: English',
//       url: '/audiofiles/english.mp3’);
// //   soundManager.play('English');


// // };


soundManager.setup({
 url: 'swf/',
 onready: function() {
  $("#carRev").on("click", function(){
 var mySound = soundManager.createSound({
id: 'carRev',
 url: './audiofiles/english.mp3'
 });
 mySound.play();
});
 },
 // ontimeout: function() {
 // }
 // });

  $("#carStart").on("click", function(){
 var mySound = soundManager.createSound({
id: 'carStart',
 url: './audiofiles/english.mp3'
 });
 mySound.play();
});
 },
 ontimeout: function() {
 }
 });









// $('English').on('click', soundManager.onload);



  
// }



//   $('.greeting').on("click", showGreeting);

// function showGreeting(){

//  // $('.greeting').on("click", function(){
//   console.log("click"); 
//  var output = "WDI 13 speaks:"  + $(this).attr('id');
//   $('p').text(output);

// }

});