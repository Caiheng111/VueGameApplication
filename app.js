new Vue({
  el:"#app",
  data:{
    playHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods:{
    startGame:function(){
      this.gameIsRunning = true;
      this.playHealth= 100;
      this.monsterHealth= 100;
    },
    attack:function(){
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
          isPlayer: true,
          text: 'Player hits Monster for ' + damage
      });
      if (this.checkWin()) {
          return;
      }

      this.monsterAttacks();

    },
    specialAttack:function(){
      
    },
    heal:function(){
      
    },
    giveUp:function(){
      
    }
  }

});