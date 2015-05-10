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

 $("#rev").on("click", function(){
 var mySound = soundManager.createSound({
id: 'rev',
 url: './audiofiles/english.mp3'
 });
 mySound.play();


// $("#Chinese").on("click", function(){
 // var mySound = soundManager.createSound({
  // id: 'Chinese',
 // url: './audiofiles/chinese.mp3'
// });
 // mySound.play();



})
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