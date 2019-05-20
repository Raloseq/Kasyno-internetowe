<template>
  <main class="app-main">
    <h1 class="app-main__heading">Gry</h1>
    <Games/>
  </main>
</template>

<script>
import UserBelt from "@/components/UserBelt.vue";
import Games from "@/components/Games.vue";
export default {
  name: "Main",
  components: {
    UserBelt,
    Games
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  .app-main__heading {
    font-size: 40px;
    margin: 20px 0;
    text-align: center;
  }
}
@media (min-width: 1024px) {
  .app-main {
    .app-main__heading {
      font-size: 40px;
      margin: 130px 0 20px;
    }
  }
}
@media (min-width: 2560px) {
  .app-main {
    .app-main__heading {
      font-size: 100px;
      margin: 200px 0 50px;
    }
  }
}
</style>

