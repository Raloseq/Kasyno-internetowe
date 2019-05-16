<template>
  <main class="app-main">
    <UserBelt/>
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
</style>

