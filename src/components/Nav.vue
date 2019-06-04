<template>
  <nav
    v-on:click="isActiveNav = !isActiveNav"
    class="app-nav"
    v-bind:class="{openBurger: isActiveNav}"
  >
    <UserBelt/>
    <router-link to="/" class="app-nav__item">Home</router-link>
    <router-link to="/Login" class="app-nav__item">Login</router-link>
    <router-link to="/Register" class="app-nav__item">Register</router-link>
    <router-link to="/Main" class="app-nav__item">x</router-link>
    <div class="app-nav__burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
import UserBelt from "@/components/UserBelt.vue";
export default {
  name: "Nav",
  components: {
    UserBelt
  },
  data() {
    return {
      isActiveNav: false
    };
  }
};
</script>

<style lang="scss" scoped>
.app-nav {
  position: fixed;
  width: 100%;
  top: -100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  z-index: 99;
  .app-nav__item {
    text-decoration: none;
    color: white;
    font-size: 40px;
    margin: 30px 0;
  }
  .app-nav__burger {
    z-index: 9999;
    position: fixed;
    top: 20px;
    right: 5px;
    width: 50px;
    height: 35px;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.2s;

    span {
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: black;
      transition: top 0.2s 0.2s, bottom 0.2s 0.2s, opacity 0.2s 0.3s,
        transform 0.2s 0.4s;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: calc(50% - 2.5px);
      }

      &:nth-child(3) {
        bottom: 0;
      }
    }
  }
  //ACTIVE
  &.openBurger {
    z-index: 99;
    top: 0;
    .app-nav__burger {
      transform: rotate(-90deg);

      span {
        background-color: white;

        &:nth-child(1) {
          top: calc(50% - 2.5px);
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          bottom: calc(50% - 2.5px);
          transform: rotate(-45deg);
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .app-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vh;
    background-color: rgba(0, 0, 0, 0.3);
    .app-nav__item {
      font-size: 20px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid white;
        width: 0;
        margin: -5px 0;
        transition: width 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      }

      &:hover::before {
        width: 100%;
      }
    }

    .app-nav__burger {
      display: none;
    }
  }
}
@media (min-width: 2560px) {
  .app-nav {
    height: 6vh;
    .app-nav__item {
      font-size: 60px;
    }
  }
}
//LANDSCAPE
@media (min-width: 320px) and (orientation: landscape) {
  .app-nav {
    .app-nav__item {
      font-size: 30px;
      margin: 10px;
    }
  }
}
@media (min-width: 768px) and (orientation: landscape) {
  .app-nav {
    .app-nav__item {
      font-size: 20px;
      margin: 10px;
    }
  }
}
</style>
