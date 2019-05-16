<template>
  <section class="app-user-belt">
    <router-link to="/UserProfile" class="app-user-belt__link">
      <!--zdjecie przesyłane z komputera(do zrobienia) -->
      <img src="../assets/test.png" alt="avatar" class="app-user-belt__avatar">
    </router-link>
    <h1 class="app-user-belt__name">Login</h1>
  </section>
</template>

<script>
export default {
  name: "UserBelt"
};
</script>

<style lang="scss" scoped>
.app-user-belt {
  height: 15vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0 15px;
  .app-user-belt__link {
    height: 15vw;
    width: 15vw;
    cursor: pointer;
    .app-user-belt__avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .app-user-belt__name {
    margin: 0 15px;
  }
}
</style>

