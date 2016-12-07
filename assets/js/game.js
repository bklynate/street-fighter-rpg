// jQuery variables
var $kenImg = $("#ken_img");
var $ryuImg = $("#ryu_img");
var $atkBtn = $("#attack-btn");
var $playerHp = $("#playerHp");
var $gameInfo = $("#game-info");
var $kenStats = $("#ken-stats");
var $ryuStats = $("#ryu-stats");
var $p1BarDiv;
var $playerBar;
var $opponentBar;

// game object
var game = {
  // object of all the characters in the game
  characters: {
    "ryu": {
      name: "Ryu",
      class: ".ryu",
      hp: 108,
      atk: 9
    },
    "ken": {
      name: "Ken",
      class: ".ken",
      hp: 108,
      atk: 9
    }
  },
  // variables needed to play the game
  player: "",
  playerHp: 0,
  playerAttack: 0,
  computerPlayer: "",
  computerHp: 0,
  computerAttack: 0,
  needUi: true,

  // game functions
  assignPlayers: function(player) {
    if(this.player == '') {
      this.player = player;
      console.log(this.player);
      this.playerHp += this.characters[this.player].hp;
      this.playerAttack = this.characters[this.player].atk;
      console.log('player attack: ', this.playerAttack);
      console.log('player health: ', this.playerHp);
      $(".attacker").append($("<div class='" + this.player + " " + this.player + "_stance'>"));
      $("#playerHp").css('width',this.playerHp)
      for(var prop in this.characters){
        if(prop !== this.player){
          this.computerPlayer = prop;
        }
      }
      $(".flipped").append($("<div class='" + this.computerPlayer + " " + this.computerPlayer + "_stance'>"));
      this.computerHp = this.characters[this.computerPlayer].hp;
      this.computerAttack = this.characters[this.computerPlayer].atk;
    }
    this.startGame();
  },

  startGame: function() {
    this.constructUi()
    $atkBtn.addClass('btn btn-danger btn-lg');
    $atkBtn.html("Attack!")
    $("#attack-btn").append($atkBtn);
    this.needUi = false;
  },

  performAttack: function() {
    var kenMoves = {
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
      }
    }

    var ryuMoves = {
      punch: function() {
        $(".ryu").addClass('ryu_punch');
        setTimeout(function() { $(".ryu").removeClass('ryu_punch'); }, 150);
      },
      kick: function() {
        $(".ryu").addClass('ryu_kick');
        setTimeout(function() { $(".ryu").removeClass('ryu_kick'); }, 500);
      }
    }

    var randomProperty = function (obj) {
      var keys = Object.keys(obj)
      return obj[keys[ keys.length * Math.random() << 0]];
    };

    if(this.player === "ken") {
      randomProperty(kenMoves)();
    } else if (this.player === "ryu") {
      randomProperty(ryuMoves)();
    };

    if(this.computerPlayer === "ken") {
      randomProperty(kenMoves)();
    } else if (this.computerPlayer === "ryu") {
      randomProperty(ryuMoves)();
    };
  },

  constructUi: function() {
    if(this.needUi) {
      $p1BarDiv = $("<div>");
      $p2BarDiv = $("<div>");
      $playerBar = $('<div role="progressbar" aria-valuemin="0" style="width: 0%;">');
      $opponentBar = $('<div role="progressbar"  aria-valuemin="0" style="width: 0%;">');
      $p1BarDiv.addClass('progress');
      $p2BarDiv.addClass('progress');
      $playerBar.addClass('progress-bar');
      $opponentBar.addClass('progress-bar progress-bar-danger');
      $playerBar.css('width', this.playerHp+'%');
      if(this.player === "ken") {
        $p1BarDiv.css('margin-top', '20px');
      }
      if(this.computerPlayer === "ken") {
        $p2BarDiv.css('margin-top', '20px');
      }
      $opponentBar.css('width', this.computerHp+'%');
      $('#p1').append($p1BarDiv.append($playerBar));
      $('#p2').append($p2BarDiv.append($opponentBar));
    }
  },

  updateUi: function() {
    var randomAtkMultiplier = Math.floor(Math.random() * 3)+1
    var randomAtkMultiplier2 = Math.floor(Math.random() * 3)+1
    this.computerHp -= (this.playerAttack * randomAtkMultiplier)
    $kenStats.hide().html("Ken did an attack of " +this.playerAttack * randomAtkMultiplier+" dmg.").effect('shake', 100).fadeIn('slow');
    $ryuStats.hide().html("Ryu did an attack of " +this.computerAttack * randomAtkMultiplier2+" dmg.").effect('shake', 100).fadeIn('slow');
    $opponentBar.css('width', this.computerHp+'%');
    this.playerHp -= (this.computerAttack * randomAtkMultiplier2)
    console.log("computerAtk this round: ", (this.computerAttack * randomAtkMultiplier2));
    $playerBar.css('width', this.playerHp+'%');
    this.checkForWinner()
  },

  checkForWinner: function() {
    if(this.playerHp <= 0) {
      $('#main-banner').html("You Lose");
      $atkBtn.css("pointer-events","none");
      $atkBtn.css("background-color", "#555");
      $atkBtn.css("color", "white");
      this.resetGame();
    } else if (this.computerHp <= 0) {
      $('#main-banner').html("You Win");
      $atkBtn.css("pointer-events","none");
      $atkBtn.css("background-color", "#555");
      $atkBtn.css("color", "white");
      this.resetGame();
    }
  },

  resetGame: function () {
    setTimeout(function() {
      location.reload()
    }, 5300);
  }
}

$(document).ready(function(){

  $kenImg.on('click', function(){
    var data = $(this).data("name");
    game.assignPlayers(data);
  });

  $ryuImg.on('click', function(){
    var data = $(this).data("name");
    game.assignPlayers(data);
  });

  $atkBtn.on('click', function(){
    game.performAttack();
    game.updateUi();
  });
});
