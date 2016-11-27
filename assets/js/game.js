var $ken = $('.ken');
var $kenImg = $("#ken_img");
var $playerSelectionArea = $(".player-selection-area");
var $ryu = $('.ryu');
var $ryuImg = $('#ryu_img')

/* Peter's edits */

var attChoice = false;
var defChoice = false;

$kenImg.on('click', function(){
  player("ken");
});

$ryuImg.on('click', function(){
  player("ryu");
})


function player(name) {
  if (attChoice === false) {
    chooseChar(name, ".attacker");
    attChoice = true;
  } else if(defChoice === false) {
    chooseChar(name, ".defender");
    defChoice = true;
  } 
}

function chooseChar(name, position) {
  var temp = $("<div class='" + name + " stance hidden'>")
  $(position).append(temp);
  temp.fadeToggle();
  temp.removeClass('hidden');
}







$(document).on('keydown', function(e) { // 'e' stands for event
  if (e.key === 'p') {
    console.log("This is listening");
    $ken.addClass('punch');
    setTimeout(function() { $ken.removeClass('punch'); }, 150);
  }

  if (e.key === 'k') {
    console.log("This is listening");
    $ken.addClass('kick');
    setTimeout(function() { $ken.removeClass('kick'); }, 500);
  }

  if (e.key === 's') {
    console.log("This is listening");
    $ken.addClass('shoryuken');
    setTimeout(function() { $ken.addClass('down'); }, 500);
    setTimeout(function() { $ken.removeClass('shoryuken down'); }, 1000);
  }

  if (e.key === 'p') {
    console.log("This is listening");
    $ryu.addClass('r_punch');
    setTimeout(function() { $ryu.removeClass('r_punch'); }, 150);
  }
});
