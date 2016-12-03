var $kenImg = $("#ken_img");
var $ryuImg = $("#ryu_img");

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

  // game functions
  assignPlayers: function(player) {
    if(this.player == '') {
      this.player = player;
      console.log(this.player);
      this.playerHp = this.characters[this.player].hp;
      this.playerAttack = this.characters[this.player].atk;
      console.log('player attack: ', this.playerAttack);
      console.log('player health: ', this.playerHp);
      $(".attacker").append($("<div class='" + this.player + " " + this.player + "_stance'>"));
      for(var prop in this.characters){
        if(prop !== this.player){
          this.computerPlayer = prop;
        }
      }
      $(".flipped").append($("<div class='" + this.computerPlayer + " " + this.computerPlayer + "_stance'>"));
      this.computerHp = this.characters[this.computerPlayer].hp;
      this.computerAttack = this.characters[this.computerPlayer].atk;
    }
    
  },
  startGame: function() {

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
});
