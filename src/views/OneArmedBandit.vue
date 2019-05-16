<template>
  <section class="app-bandit">
    <h1 class="app-bandit__heading">Jednoręki bandyta</h1>
    <div class="app-bandit__colors">
      <div class="app-bandit__color"></div>
      <div class="app-bandit__color"></div>
      <div class="app-bandit__color"></div>
    </div>
    <div class="app-bandit__action">
      <input type="number" placeholder="Podaj stawkę" class="app-bandit__rate">
      <button class="app-bandit__spin">Zakręć</button>
    </div>
    <div class="app-bandit__statisctics">
      <div class="divide">
        <div class="app-bandit__money">Money:</div>
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
export default {
  name: "OneArmedBandit"
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
</style>

