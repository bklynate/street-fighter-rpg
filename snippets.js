// $("#ken_img").on('click', function(){
//   $("#ken_p").fadeToggle();
//   $("#ken_p").removeClass("hidden")
// })

// $kenImg.on('click', function(){
//   $kenDiv = $("<div class='ken stance hidden'>")
//   $(".attacker").append($kenDiv);
//   $kenDiv.fadeToggle();
//   $kenDiv.removeClass('hidden')
// })
//
// $ryuImg.on('click', function(){
//   $ryuDiv = $("<div class='ryu stance hidden'>")
//   $(".attacker").append($ryuDiv);
//   $ryuDiv.fadeToggle();
//   $ryuDiv.removeClass('hidden')
// })

$(document).on('keydown', function(e) { // 'e' stands for event
  if(playerName === "ryu"){
    if (e.key === 'p') {
      console.log("This is listening");
      $(".ryu").addClass('ryu_punch');
      setTimeout(function() { $(".ryu").removeClass('ryu_punch'); }, 150);
    }

    if (e.key === 'k') {
      console.log("This is listening");
      $(".ryu").addClass('ryu_kick');
      setTimeout(function() { $(".ryu").removeClass('ryu_kick'); }, 500);
    }
  } // Closes the if player === ryu conditional

  if(playerName === "ken") {
    if (e.key === 'p') {
      console.log("This is listening", $(".ken"));
      $(".ken").addClass('punch');
      setTimeout(function() { $(".ken").removeClass('punch'); }, 150);
    }

    if (e.key === 'k') {
      console.log("This is listening");
      $(".ken").addClass('kick');
      setTimeout(function() { $(".ken").removeClass('kick'); }, 500);
    }

    if (e.key === 's') {
      console.log("This is listening");
      $(".ken").addClass('shoryuken');
      setTimeout(function() { $(".ken").addClass('down'); }, 500);
      setTimeout(function() { $(".ken").removeClass('shoryuken down'); }, 1000);
    }
  } // Closes the if player === ken conditional


  function game(name) {
    if (attChoice === false) {
      chooseChar(name, ".attacker");
      playerName = name
      attChoice = true;
    } else if(defChoice === false) {
      chooseChar(name, ".defender .flipped");
      computerName = name
      defChoice = true;
    }
  }

  function chooseChar(name, position) {
    var temp = $("<div class='" + name + " " + name + "_stance hidden'>")
    $(position).append(temp);
    temp.fadeToggle();
    temp.removeClass('hidden');
  }









  var $ken = $('.ken');
  var $kenImg = $("#ken_img");
  var kenHealth = 100;
  var $playerSelectionArea = $(".player-selection-area");
  var $ryu = $('.ryu');
  var $ryuImg = $('#ryu_img')
  var ryuHealth = 130;
  var playerName = '';
  var computerName = '';
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
      playerName = name
      attChoice = true;
    } else if(defChoice === false) {
      chooseChar(name, ".defender .flipped");
      computerName = name
      defChoice = true;
    }
  }

  function chooseChar(name, position) {
    var temp = $("<div class='" + name + " " + name + "_stance hidden'>")
    $(position).append(temp);
    temp.fadeToggle();
    temp.removeClass('hidden');
  }

  var ken = {
    punch: function(){
      $(".ken").addClass('punch');
      setTimeout(function() { $(".ken").removeClass('punch'); }, 150);
    },
    kick: function(){
      $(".ken").addClass('kick');
      setTimeout(function() { $(".ken").removeClass('kick'); }, 500);
    },
    shoryuken: function(){
      $(".ken").addClass('shoryuken');
      setTimeout(function() { $(".ken").addClass('down'); }, 500);
      setTimeout(function() { $(".ken").removeClass('shoryuken down'); }, 1000);
    },
    hp: 200
  }

  var ryu = {
    punch: function(){
      $(".ryu").addClass('ryu_punch');
      setTimeout(function() { $(".ryu").removeClass('ryu_punch'); }, 150);
    },
    kick: function(){
      $(".ryu").addClass('ryu_kick');
      setTimeout(function() { $(".ryu").removeClass('ryu_kick'); }, 500);
    },
    hp: 150
  }

  /* Game Engine */
  $(document)on('click', '#ken_img', function(){
  })
