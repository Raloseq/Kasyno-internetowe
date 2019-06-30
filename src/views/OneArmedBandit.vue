<template>
  <section class="app-bandit">
    <h1 class="app-bandit__heading">Jednoręki bandyta</h1>
    {{msg}}
    <div class="app-bandit__colors">
      <div class="app-bandit__color" :style="{'background-color': FirstColor}"></div>
      <div class="app-bandit__color" :style="{'background-color': SecondColor}"></div>
      <div class="app-bandit__color" :style="{'background-color': ThirdColor}"></div>
    </div>
    <div class="app-bandit__action">
      <input type="number" placeholder="Podaj stawkę" class="app-bandit__rate" v-model="bet" />
      <button class="app-bandit__spin" @click="spin">Zakręć</button>
    </div>
    <div class="app-bandit__statisctics">
      <div class="divide">
        <div class="app-bandit__money">Money: {{money}}</div>
        <div class="app-bandit__spins">Spins:</div>
      </div>
      <div class="divide">
        <div class="app-bandit__wins">Wins:</div>
        <div class="app-bandit__lose">Lose:</div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "OneArmedBandit",
  data() {
    return {
      isUserLogged: this.$store.state.isLoggedIn,
      bet: null,
      msg: "",
      money: null,
      FirstColor: "white",
      SecondColor: "white",
      ThirdColor: "white"
    };
  },
  methods: {
    spin() {
      this.msg = "";
      const colors = ["white", "red", "blue", "green", "yellow", "purple"];
      if (!this.isUserLogged) {
        this.msg = "Sorry you're not logged in";
      } else if (!this.bet) {
        this.msg = "Sorry you have to bet something";
      } else {
        const request = {
          token: this.$store.state.token,
          bet: this.bet
        };
        axios
          .post("http://127.0.0.1:8000/play/bandit", request)
          .then(res => {
            console.log(res.data);
            this.msg = res.data.wlStatus;
            this.money = res.data.money;
            this.FirstColor = colors[res.data.bandit[0]];
            this.SecondColor = colors[res.data.bandit[1]];
            this.ThirdColor = colors[res.data.bandit[2]];
          })
          .catch(err => {
            this.msg = err.response.data.error;
          });
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
    justify-content: space-around;
    width: 90%;
    margin: 20px 0;
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
//PORTRAIT

//LANDSCAPE
</style>

