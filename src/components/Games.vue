<template>
  <section class="app-main__games">
    <div class="app-main__game">
      <h1 class="app-main__game-heading">Jednoręki bandyta</h1>
      <router-link to="/OneArmedBandit" class="app-main__link"></router-link>
    </div>
    <div class="app-main__game">
      <h1 class="app-main__game-heading">Coming Soon</h1>
      <router-link to class="app-main__link"></router-link>
    </div>
    <div class="app-main__game">
      <h1 class="app-main__game-heading">Coming Soon</h1>
      <router-link to class="app-main__link"></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Games"
};
</script>

<style lang="scss" scoped>
.app-main__games {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .app-main__game {
    position: relative;
    background: url("../assets/bandyta.jpg") no-repeat center;
    background-size: cover;
    text-align: center;
    height: 30vh;
    width: 90%;
    margin: 15px;
    border-radius: 5%;
    overflow: hidden;
    &:nth-child(2) {
      background: url("../assets/ruletka.jpg") no-repeat center;
      background-size: cover;
    }
    .app-main__game-heading {
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 25px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
    }
    .app-main__link {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
</style>

