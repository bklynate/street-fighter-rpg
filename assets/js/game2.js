var $ryu = $('.ryu');

/* javascript */
$(document).on('keydown', function(e) { // 'e' stands for event
  if (e.key === 'p') {
    console.log("This is listening");
    $ryu.addClass('punch');
    setTimeout(function() { $ryu.removeClass('punch'); }, 150);
  }

  if (e.key === 'k') {
    console.log("This is listening");
    $ryu.addClass('kick');
    setTimeout(function() { $ryu.removeClass('kick'); }, 500);
  }
});
