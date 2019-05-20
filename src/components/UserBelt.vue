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
    color: white;
    margin: 0 15px;
  }
}
@media (min-width: 1024px) and (orientation: portrait) {
  .app-user-belt {
    .app-user-belt__link {
      height: 8vw;
      width: 8vw;
    }
  }
}
@media (min-width: 1024px) and (orientation: landscape) {
  .app-user-belt {
    .app-user-belt__link {
      height: 5vw;
      width: 5vw;
    }
  }
}
@media (min-width: 320px) and (orientation: landscape) {
  .app-user-belt {
    .app-user-belt__link {
      height: 8vw;
      width: 8vw;
    }
  }
}
@media (min-width: 1440px) {
  .app-user-belt {
    .app-user-belt__name {
      font-size: 30px;
      margin: 0 30px;
    }
    .app-user-belt__link {
      height: 6vw;
      width: 6vw;
    }
  }
}
@media (min-width: 2560px) {
  .app-user-belt {
    .app-user-belt__link {
      height: 5vw;
      width: 5vw;
    }
  }
}
</style>

