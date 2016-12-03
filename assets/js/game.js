// jQuery variables
var $kenImg = $("#ken_img");
var $ryuImg = $("#ryu_img");
var $atkBtn = $("#attack-btn");
var $playerHp = $("#playerHp");

// game object
var game = {
  // object of all the characters in the game
  characters: {
    "ryu": {
      name: "Ryu",
      class: ".ryu",
      hp: 200,
      atk: 15
    },
    "ken": {
      name: "Ken",
      class: ".ken",
      hp: 250,
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
      randomProperty(kenMoves)()
      console.log(this.opponentHp - this.playerAttack)
    } else if (this.player === "ryu") {
      randomProperty(ryuMoves)()
    };

  },

  constructUi: function() {
    if(this.needUi) {
      var $p1BarDiv = $("<div>");
      var $p2BarDiv = $("<div>");
      var $playerBar = $('<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">');
      var $opponentBar = $('<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">');
      $p1BarDiv.addClass('progress');
      $p2BarDiv.addClass('progress');
      $playerBar.addClass('progress-bar');
      $opponentBar.addClass('progress-bar');
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
  }
}

$(document).ready(function(){
  $kenImg.on('click', function(){
    var data = $(this).data("name")
    game.assignPlayers(data);
  });

  $ryuImg.on('click', function(){
    var data = $(this).data("name")
    game.assignPlayers(data);
  });

  $atkBtn.on('click', function(){
    game.performAttack();
  });
});
