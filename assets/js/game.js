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
  gamePlayers: [],
  opponentsLeft: true,
  // variables to manipulate the DOM
  playerElement: $('#attacker'),
  defenderElement: $('#defender'),

  // game functions
  assignPlayers: function(player) {
    if(this.player == '') {
      this.player = player;
      console.log(player);
    }
  }
}

$(document).ready(function(){
  $("img").on('click', function(e){
    // console.log(e.currentTarget.offsetParent.id);
    console.log(e);
  })
})
