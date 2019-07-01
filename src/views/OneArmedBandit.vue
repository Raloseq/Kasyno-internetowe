<template>
  <section class="app-bandit">
    <h1 class="app-bandit__heading">Jednoręki bandyta</h1>
    <!-- <div v-for="(container,index) in divColor" :key="index" class="app-bandit__colors">
      <div
        v-for="(divs,index) in container"
        :key="index"
        class="app-bandit__color"
        v-bind:style="[{backgroundColor: divs},{color: divs}]"
      >{{divs}}</div>
    </div>-->
    <div class="app-bandit__colors" v-if="x == 1">
      <div
        v-for="(color, index) in divColor"
        :key="index"
        class="app-bandit__color"
        v-bind:style="[{ backgroundColor: color }, { color }]"
      >{{ color }}</div>
    </div>
    <div class="app-bandit__action">
      <input type="number" placeholder="Podaj stawkę" class="app-bandit__rate" ref="gamerate">
      <button class="app-bandit__spin" v-on:click="startGame()">Zakręć</button>
    </div>
    <div class="app-bandit__statisctics">
      <div class="divide">
        <div class="app-bandit__money" v-bind:class="money">Money: {{money}}</div>
        <div class="app-bandit__spins" v-bind:class="spins">Spins: {{spins}}</div>
      </div>
      <div class="divide">
        <div class="app-bandit__wins" v-bind:class="wins">Wins: {{wins}}</div>
        <div class="app-bandit__lose" v-bind:class="lose">Lose: {{lose}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "OneArmedBandit",
  components: {},
  data() {
    return {
      money: 22,
      spins: 0,
      wins: 0,
      lose: 0,
      options: ["red", "green", "blue"],
      divColor: [],
      x: 0
    };
  },
  methods: {
    startGame() {
      if (this.x == 1) {
        this.divColor = [];
        this.x = 0;
      }
      this.x++;
      this.startSpin();
      this.winStreaks();
      console.log(this.divColor);
    },
    randomColors() {
      for (let i = 0; i < this.options.length; i++) {
        const colorIndex = Math.floor(Math.random() * this.options.length);
        const color = this.options[colorIndex];
        this.divColor.push(color);
      }
    },
    startSpin() {
      let spinValue = this.$refs.gamerate.value;
      if (spinValue > this.money) {
        alert("Nie masz tyle kasy");
      } else if (spinValue == 0) {
        alert("Za 0 nie zagrasz");
      } else {
        this.money -= spinValue;
        this.randomColors();
      }
    },
    winStreaks() {
      const winCombos = [
        ["green", "green", "green"],
        ["red", "red", "red"],
        ["blue", "blue", "blue"]
      ];
      // if (JSON.stringify(this.divColor) === JSON.stringify(winCombos[0])) {
      //   console.log("jackpot");
      // }
      for (let i = 0; i < this.divColor.length; i++) {
        if (this.divColor == winCombos[i]) {
          console.log("jackpott");
        }
      }
      if (this.divColor == winCombos[0]) {
        console.log("jackpott");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-bandit {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .app-bandit__heading {
    font-size: 30px;
    margin: 20px 0;
  }
  .app-bandit__colors {
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0;
    .app-bandit__color {
      border: 1px solid black;
      width: 30%;
      height: 10vh;
    }
  }
  .app-bandit__action {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    width: 90%;
  }
  .app-bandit__statisctics {
    display: flex;
    justify-content: space-around;
    width: 100%;
    .divide {
      padding: 10px;
    }
  }
}
</style>

