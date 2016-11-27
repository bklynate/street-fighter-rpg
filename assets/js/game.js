var $kenImg = $("#ken_img");
var $playerSelectionArea = $(".player-selection-area");
var $ryu = $('.ryu');
var $kenDiv;

/* javascript */

$(document).ready(function() {
  // $("#ken_img").on('click', function(){
  //   $("#ken_p").fadeToggle();
  //   $("#ken_p").removeClass("hidden")
  // })

  $kenImg.on('click', function(){
    $kenDiv = $("<div class='ken stance hidden'>")
    $(".attacker").append($kenDiv);
    $kenDiv.fadeToggle();
    $kenDiv.removeClass('hidden')
  })

  $(document).on('keydown', function(e) { // 'e' stands for event
    if (e.key === 'p') {
      console.log("This is listening", $kenDiv);
      $kenDiv.addClass('punch');
      setTimeout(function() { $kenDiv.removeClass('punch'); }, 150);
    }

    if (e.key === 'k') {
      console.log("This is listening");
      $kenDiv.addClass('kick');
      setTimeout(function() { $kenDiv.removeClass('kick'); }, 500);
    }

    if (e.key === 's') {
      console.log("This is listening");
      $kenDiv.addClass('shoryuken');
      setTimeout(function() { $kenDiv.addClass('down'); }, 500);
      setTimeout(function() { $kenDiv.removeClass('shoryuken down'); }, 1000);
    }
  });
});
