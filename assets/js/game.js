var $ken = $('.ken');
var $playerSelectionArea = $(".player-selection-area");
var $ryu = $('.ryu');
/* javascript */

$(document).ready(function() {
  $("#ken_img").on('click', function(){
    $("#ken_p").fadeToggle();
    $("#ken_p").removeClass("hidden")
  })

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
});
