var $ryu = $('.ryu');

/* javascript */
$(document).on('keydown', function(e) { // 'e' stands for event
  if (e.key === 'p') {
    console.log("This is listening");
    $ryu.addClass('r_punch');
    setTimeout(function() { $ryu.removeClass('r_punch'); }, 150);
  }

  if (e.key === 'k') {
    console.log("This is listening");
    $ryu.addClass('r_kick');
    setTimeout(function() { $ryu.removeClass('r_kick'); }, 500);
  }
});
