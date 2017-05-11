/**
 * Created by Sim on 2017-05-09.
 */
function generateStars(){
  for(var i=0; i<25; i++){
  $("<span></span>",{
    class:"star"
  }).css({
    left:Math.random()*($(window).innerWidth() - 20),
    top:Math.random()*($(window).innerHeight()-20)
  }).appendTo(document.body);
}
}
var count = 0;
var myInterval = setInterval(function(){
  if(count > 3){
    clearInterval(myInterval);
  }
  generateStars();
  count++;
}, 5000);
generateStars();